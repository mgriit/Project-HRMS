import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceListComponent } from '../invoice/invoice-list/invoice-list.component';
import { InvoiceCreateNewComponent } from './invoice-create-new/invoice-create-new.component';
import { InvoiceReceiptComponent } from './invoice-receipt/invoice-receipt.component';


const routes: Routes = [
  {
    path: "list",
    component: InvoiceListComponent
  },
  {
    path: "create",
    component: InvoiceCreateNewComponent
  },
  {
    path: "edit/:id",
    component: InvoiceCreateNewComponent
  },
  {
    path: "print",
    component: InvoiceReceiptComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
