import { Component, Input, OnInit } from '@angular/core';
import { InvoiceItems } from '../model/invoice-items';

@Component({
  selector: 'app-invoice-receipt',
  templateUrl: './invoice-receipt.component.html',
  styleUrls: ['./invoice-receipt.component.scss']
})
export class InvoiceReceiptComponent implements OnInit {
  @Input() public receiptData: InvoiceItems;

  constructor() { }

  ngOnInit() {
  }

}
