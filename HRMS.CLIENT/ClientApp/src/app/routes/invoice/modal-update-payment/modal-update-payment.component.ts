import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-modal-update-payment',
  templateUrl: './modal-update-payment.component.html',
  styleUrls: ['./modal-update-payment.component.scss']
})
export class ModalUpdatePaymentComponent implements OnInit {

  paymentForm: FormGroup;
  isLoading = false;
  id=null;
  lineTotal=0;
  discount=0;
  invoiceTotal=0;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRef: MatDialogRef<ModalUpdatePaymentComponent>,
  public invoiceService: InvoiceService,
  public toastr: ToastrService) { }

  ngOnInit() {
    this.createForm();
    this.id=this.data.id;
    this.lineTotal=this.data.total;
    this.discount=this.data.discount;
    this.invoiceTotal=this.lineTotal-this.discount;
    this.paymentForm.controls['paid'].setValue(this.data.grandTotal);
  }

  private createForm() {
    this.paymentForm = new FormGroup(
      {
        paid : new FormControl(null, Validators.required)
      }
    );
  }

  onSave(){
    if(this.paymentForm.invalid){
      return;
    }
    if(this.paymentForm.get('paid').value > this.invoiceTotal){
      this.toastr.error('Payment is not valid');
      return;
    }
    const due= this.invoiceTotal-this.paymentForm.get('paid').value
    const status = due == 0 ? 1:2;
    if(this.data.due==due){
      this.toastr.error('There is nothing to change');
      return;
    }

    if(this.id){
      this.invoiceService.updatePayment(this.id,{due: due, status: status}).subscribe(d=> {
        this.toastr.success(d['message'].toString());
        this.dialogRef.close(true);
      },(e)=>{
        this.toastr.error(e['message'].toString());
      })
    }

  }
}
