import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryRoutingModule } from './category-routing.module';
import {NgxPrintModule} from 'ngx-print';


@NgModule({
  declarations: [
    CategoryCreateComponent,
    CategoryListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CategoryRoutingModule,
    NgxPrintModule
  ],
  entryComponents: []
})
export class CategoryModule { }
