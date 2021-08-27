import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Customer } from 'app/routes/customer/customer.model';
import { CustomerService } from 'app/routes/customer/customer.service';
import html2canvas from 'html2canvas';
import * as printJS from 'print-js';

@Component({
  selector: 'app-modal-customer-create',
  templateUrl: './modal-customer-create.component.html',
  styleUrls: ['./modal-customer-create.component.scss']
})
export class ModalCustomerCreateComponent implements OnInit {

  customerForm: FormGroup;
  customer : Customer;
  isLoading=false;
  constructor(private customerService: CustomerService,
    public dialogRef: MatDialogRef<ModalCustomerCreateComponent>) {}

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.customerForm = new FormGroup(
      {
        name : new FormControl(null, Validators.required),
        phone: new FormControl(null, [Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(11),Validators.maxLength(11)]),
        email: new FormControl(null, [Validators.email]),
        address : new FormControl(null),
      }
    );
  }


  onSave(){
    if(this.customerForm.invalid)
    {
      return;
    }

    this.isLoading=true
    this.customerService.addCustomer(this.getData()).subscribe(data => {
        this.isLoading=false;
        this.customerForm.reset();
        this.dialogRef.close(data);
    })
  }

  getData(): Customer {
    return (this.customer = {
      id: null,
      name: this.customerForm.get('name').value,
      phone: this.customerForm.get('phone').value,
      email: this.customerForm.get('email').value,
      address: this.customerForm.get('address').value
    });
  }
}
