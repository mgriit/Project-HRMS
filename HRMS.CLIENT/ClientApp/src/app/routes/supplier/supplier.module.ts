import { NgModule } from '@angular/core';
import { SupplierRoutingModule } from './supplier-routing.module';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { SupplierCreateComponent } from './supplier-create/supplier-create.component';
import { SharedModule } from '@shared';

@NgModule({
  declarations: [
    SupplierListComponent,
    SupplierCreateComponent
  ],
  imports: [
    SharedModule,
    SupplierRoutingModule,
  ],
  entryComponents: []
})
export class SupplierModule { }
