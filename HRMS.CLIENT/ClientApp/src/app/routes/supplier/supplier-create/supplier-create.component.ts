import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Supplier } from '../supplier.model';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-supplier-create',
  templateUrl: './supplier-create.component.html',
  styleUrls: ['./supplier-create.component.scss']
})
export class SupplierCreateComponent implements OnInit {



  supplier: Supplier;
  supplierForm: FormGroup;
  private mode = "create";
  private id: any;
  isLoading = false;

  constructor(public supplierService: SupplierService,
    public aroute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,) { }

  ngOnInit() {

    this.aroute.paramMap.subscribe((paramMap: ParamMap) => {
      this.createForm();

      if (paramMap.has("id")) {
        this.mode = "edit";
        this.id = paramMap.get("id");

        this.supplierService.getSupplier(this.id).subscribe(data => {
          console.log(data);
          this.supplier = {
            id: data.id,
            name: data.name,
            address: data.address,
            phone: data.phone,
            email: data.email
          };

          this.supplierForm.setValue({
            name: this.supplier.name,
            address: this.supplier.address,
            phone: this.supplier.phone,
            email: this.supplier.email
          });
        });
      } else {
        this.mode = "create";
        this.id = null;
      }
    });


  }
  private createForm() {
    this.supplierForm = new FormGroup(
      {
        name: new FormControl(null, Validators.required),
        address: new FormControl(null),
        phone: new FormControl(null, [Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(11),Validators.maxLength(11)]),
        email: new FormControl(null, [Validators.email])
      }
    );
  }

  onSavePost() {
    if (this.supplierForm.invalid) {
      return;
    }

    if (this.mode === "create") {
      this.supplierService.addSupplier(this.userData())
      .subscribe((responseData) => {
        this.isLoading = false;
        this.toastr.success("Supplier has been added");
        this.router.navigate(['/supplier/list']);
      },(err)=>{
        this.isLoading = false;
      });
    }
    else {
      this.supplierService.updateSupplier(this.userData())
      .subscribe((responseData) => {
        this.isLoading = false;
        this.toastr.success("Supplier has been Updated");
        this.router.navigate(['/supplier/list']);
      },(err)=>{
        this.isLoading = false;
      });
    }
  }


  userData(): Supplier {
    return (this.supplier = {
      id: this.mode=='create'?null:this.id,
      name: this.supplierForm.get('name').value,
      address: this.supplierForm.get('address').value,
      phone: this.supplierForm.get('phone').value,
      email: this.supplierForm.get('email').value,
    });
  }

  onReset() {
    this.supplierForm.reset();
  }
}
