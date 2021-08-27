import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductListComponent } from './product-list/product-list.component';



const routes: Routes = [
  {
    path: "list",
    component: ProductListComponent
  },
  {
    path: "create",
    component: ProductCreateComponent
  },
  {
    path: "edit/:id",
    component: ProductCreateComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
