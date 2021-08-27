import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportDueComponent } from './report-due/report-due.component';
import { ReportReturnComponent } from './report-return/report-return.component';
import { ReportSalesComponent } from './report-sales/report-sales.component';
import { ReportStockSalesComponent } from './report-stock-sales/report-stock-sales.component';
import { ReportStockComponent } from './report-stock/report-stock.component';

const routes: Routes = [
  {
    path: "sales",
    component: ReportSalesComponent
  },
  {
    path: "stock",
    component: ReportStockComponent
  },
  {
    path: "stock-detail",
    component: ReportStockSalesComponent
  },
  {
    path: "payment",
    component: ReportDueComponent
  },
  {
    path: "return",
    component: ReportReturnComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
