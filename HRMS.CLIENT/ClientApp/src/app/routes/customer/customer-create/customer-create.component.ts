import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.scss']
})
export class CustomerCreateComponent implements OnInit {



  customer: Customer;
  customerForm: FormGroup;
  private mode = "create";
  private id: any;
  isLoading = false;

  constructor(public customerService: CustomerService,
    public aroute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,) { }

  ngOnInit() {

    this.aroute.paramMap.subscribe((paramMap: ParamMap) => {
      this.createForm();

      if (paramMap.has("id")) {
        this.mode = "edit";
        this.id = paramMap.get("id");

        this.customerService.getCustomer(this.id).subscribe(data => {
          console.log(data);
          this.customer = {
            id: data.id,
            name: data.name,
            address: data.address,
            phone: data.phone,
            email: data.email
          };

          this.customerForm.setValue({
            name: this.customer.name,
            address: this.customer.address,
            phone: this.customer.phone,
            email: this.customer.email
          });
        });
      } else {
        this.mode = "create";
        this.id = null;
      }
    });


  }
  private createForm() {
    this.customerForm = new FormGroup(
      {
        name: new FormControl(null, Validators.required),
        address: new FormControl(null),
        phone: new FormControl(null, [Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(11),Validators.maxLength(11)]),
        email: new FormControl(null, [Validators.email])
      }
    );
  }

  onSavePost() {
    if (this.customerForm.invalid) {
      return;
    }

    if (this.mode === "create") {
      this.customerService.addCustomer(this.userData())
      .subscribe((responseData) => {
        this.isLoading = false;
        this.toastr.success("Customer has been added");
        this.router.navigate(['/customer/list']);
      },(err)=>{
        this.isLoading = false;
      });
    }
    else {
      this.customerService.updateCustomer(this.userData())
      .subscribe((responseData) => {
        this.isLoading = false;
        this.toastr.success("Customer has been Updated");
        this.router.navigate(['/customer/list']);
      },(err)=>{
        this.isLoading = false;
      });
    }
  }


  userData(): Customer {
    return (this.customer = {
      id: this.mode=='create'?null:this.id,
      name: this.customerForm.get('name').value,
      address: this.customerForm.get('address').value,
      phone: this.customerForm.get('phone').value,
      email: this.customerForm.get('email').value,
    });
  }

  onReset() {
    this.customerForm.reset();
  }
}
