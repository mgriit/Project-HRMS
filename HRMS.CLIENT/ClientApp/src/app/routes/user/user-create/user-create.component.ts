import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DropdownItem } from '@shared/models/dropdown-item';
import { ToastrService } from 'ngx-toastr';
import { RoleService } from '../role.service';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
  user: User;
  userForm: FormGroup;
  isLoading = false;

  public roles : DropdownItem[];

  constructor(public userService: UserService,
    public aroute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private roleService: RoleService) { }

  ngOnInit() {
    this.createForm();
    this.isLoading=true;
    this.roleService.getRolesShort().subscribe(data=>{
      this.isLoading=false;
      this.roles = data;
    })
  }

  private createForm() {
    this.userForm = new FormGroup(
      {
        name: new FormControl(null, Validators.required),
        username: new FormControl(null,[Validators.required,Validators.minLength(5)]),
        password: new FormControl(null, [Validators.required,Validators.minLength(5)]),
        confirmPassword: new FormControl(null, [Validators.required,this.confirmValidator]),
        designation: new FormControl(null, Validators.required),
        role: new FormControl(null, Validators.required)
      }
    );
  }

  onSavePost() {
    if (this.userForm.invalid) {
      return;
    }
    this.userService.addUser(this.userData())
    .subscribe((responseData) => {
      this.toastr.success("User has been added");
      this.router.navigate(['/user/list']);
    },(err)=>{
      this.isLoading = false;
    });
  }


  userData(): User {
    return (this.user = {
      id: null,
      name: this.userForm.get('name').value,
      username: this.userForm.get('username').value,
      designation: this.userForm.get('designation').value,
      password: this.userForm.get('password').value,
      roleId: this.userForm.get('role').value
    });
  }

  confirmValidator = (control: FormControl): { [k: string]: boolean } => {
    if (!control.value) {
      return { error: true, required: true };
    } else if (control.value !== this.userForm.controls.password.value) {
      return { error: true, confirm: true };
    }
    return {};
  }
}
