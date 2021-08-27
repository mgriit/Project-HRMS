import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Stock } from '../../stock/stock.model';
import { StockService } from '../../stock/stock.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-stock-update',
  templateUrl: './stock-update.component.html',
  styleUrls: ['./stock-update.component.scss']
})
export class StockUpdateComponent implements OnInit {
  stockForm: FormGroup;
  stock : Stock;
  isLoading=false;
  constructor(@Inject(MAT_DIALOG_DATA) public data: Product,
  private stockService: StockService, public dialogRef: MatDialogRef<StockUpdateComponent>) {}

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.stockForm = new FormGroup(
      {
        quantity: new FormControl(null, Validators.required),
        entryDate: new FormControl(null,Validators.required)
      }
    );
  }


  onSave(){
    if(this.stockForm.invalid)
    {
      return;
    }

    this.isLoading=true
    this.stockService.createStock(this.getData()).subscribe(data => {
        this.isLoading=false;
        this.stockForm.reset();
        this.dialogRef.close(true);
    })
  }

  getData(): Stock {
    return (this.stock = {
      id: null,
      quantity: this.stockForm.get('quantity').value,
      entryDate: this.stockForm.get('entryDate').value,
      productId: this.data.id,
      type: 1
    });
  }
}
