import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DashboardComponent } from './dashboard.component';
import { DashBoardRoutingModule } from './dashboard.routing.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    SharedModule,
    DashBoardRoutingModule,
    NgApexchartsModule
  ],
  entryComponents: []
})
export class DashBoardModule { }
