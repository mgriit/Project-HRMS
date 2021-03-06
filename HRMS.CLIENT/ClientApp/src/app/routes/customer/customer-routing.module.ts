import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerListComponent } from './customer-list/customer-list.component';



const routes: Routes = [
  {
    path: "list",
    component: CustomerListComponent
  },
  {
    path: "create",
    component: CustomerCreateComponent
  },
  {
    path: "edit/:id",
    component: CustomerCreateComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
