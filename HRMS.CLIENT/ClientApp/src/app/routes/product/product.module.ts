import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import { StockUpdateComponent } from './stock-update/stock-update.component';
import { SharedModule } from '@shared';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductCreateComponent,
    StockUpdateComponent
  ],
  imports: [
    SharedModule,
    ProductRoutingModule,
  ],
  entryComponents: []
})
export class ProductModule { }
