import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { ReportSalesComponent } from './report-sales/report-sales.component';
import { ReportStockComponent } from './report-stock/report-stock.component';
import { ReportRoutingModule } from './report-routing.module';
import { NgxPrintModule } from 'ngx-print';
import { ReportStockSalesComponent } from './report-stock-sales/report-stock-sales.component';
import { ReportDueComponent } from './report-due/report-due.component';
import { ReportReturnComponent } from './report-return/report-return.component';

@NgModule({
  declarations: [
    ReportSalesComponent,
    ReportStockComponent,
    ReportStockSalesComponent,
    ReportDueComponent,
    ReportReturnComponent
  ],
  imports: [
    SharedModule,
    ReportRoutingModule,
    NgxPrintModule
  ],
  entryComponents: []
})
export class ReportModule { }
