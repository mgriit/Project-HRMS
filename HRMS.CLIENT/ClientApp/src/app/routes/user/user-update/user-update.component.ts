import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { DropdownItem } from '@shared/models/dropdown-item';
import { ToastrService } from 'ngx-toastr';
import { RoleService } from '../role.service';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {

  user: User;
  userForm: FormGroup;
  private id: any;
  isLoading = false;
  public roles : DropdownItem[];

  constructor(public userService: UserService,
    public aroute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private roleService: RoleService) { }

  ngOnInit() {

    this.aroute.paramMap.subscribe((paramMap: ParamMap) => {
      this.createForm();

      this.isLoading=true;
      this.roleService.getRolesShort().subscribe(data=>{
        this.isLoading=false;
        this.roles = data;
      })

      this.id = paramMap.get("id");

      this.userService.getUser(this.id).subscribe(data => {
        this.user = {
          id: data.id,
          name: data.name,
          username: data.username,
          designation: data.designation,
          roleId: data.roleId
        };

        this.userForm.setValue({
          name: this.user.name,
          username: this.user.username,
          designation: this.user.designation,
          password: null,
          confirmPassword: null,
          role: this.user.roleId
        });
      });

    });


  }
  private createForm() {
    this.userForm = new FormGroup(
      {
        name: new FormControl(null, Validators.required),
        username: new FormControl(null,[Validators.required,Validators.minLength(5)]),
        password: new FormControl(null, [Validators.minLength(5)]),
        confirmPassword: new FormControl(null, [this.confirmValidator]),
        designation: new FormControl(null, Validators.required),
        role: new FormControl(null, Validators.required)
      }
    );
  }

  onSavePost() {
    if (this.userForm.invalid) {
      return;
    }

    this.userService.updateUser(this.userData())
    .subscribe((responseData) => {
      this.isLoading = false;
      this.toastr.success("User has been Updated");
      this.router.navigate(['/user/list']);
    },(err)=>{
      this.isLoading = false;
    });
  }


  userData(): User {
    this.user = {
      id: this.id,
      name: this.userForm.get('name').value,
      username: this.userForm.get('username').value,
      designation: this.userForm.get('designation').value,
      roleId: this.userForm.get('role').value
    };

    if(this.userForm.get('password').value){
      this.user.password = this.userForm.get('password').value;
    }
    return this.user;
  }

  onReset() {
    this.userForm.reset();
  }

  confirmValidator = (control: FormControl): { [k: string]: boolean } => {
    if (!control.value) {
      return;
    } else if (control.value !== this.userForm.controls.password.value) {
      return { error: true, confirm: true };
    }
    return {};
  }
}
