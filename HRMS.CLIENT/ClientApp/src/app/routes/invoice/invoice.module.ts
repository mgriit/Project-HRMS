import { NgModule } from '@angular/core';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { SharedModule } from '@shared';
import { InvoiceCreateNewComponent } from './invoice-create-new/invoice-create-new.component';
import { MinValidatorDirective } from '@shared/directives/min-validator.directive';
import { MaxValidatorDirective } from '@shared/directives/max-validator.directive';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';
import { ModalCustomerCreateComponent } from './modal-customer-create/modal-customer-create.component';
import { ModalUpdatePaymentComponent } from './modal-update-payment/modal-update-payment.component';
import { InvoiceReceiptComponent } from './invoice-receipt/invoice-receipt.component';
import { NgxPrintModule } from 'ngx-print';



@NgModule({
  declarations: [
    InvoiceListComponent,
    InvoiceCreateNewComponent,
    ModalCustomerCreateComponent,
    ModalUpdatePaymentComponent,
    MinValidatorDirective,
    MaxValidatorDirective,
    InvoiceReceiptComponent
  ],
  imports: [
    SharedModule,
    InvoiceRoutingModule,
    NgOptionHighlightModule,
    NgxPrintModule
  ],
  entryComponents: []
})
export class InvoiceModule { }
