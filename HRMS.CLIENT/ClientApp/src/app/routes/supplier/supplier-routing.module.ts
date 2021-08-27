import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupplierCreateComponent } from './supplier-create/supplier-create.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component';



const routes: Routes = [
  {
    path: "list",
    component: SupplierListComponent
  },
  {
    path: "create",
    component: SupplierCreateComponent
  },
  {
    path: "edit/:id",
    component: SupplierCreateComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierRoutingModule { }
