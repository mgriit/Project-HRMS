import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerService } from 'app/routes/customer/customer.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { ReportService } from '../report.service';
import { Sales } from './sales.model';

@Component({
  selector: 'app-report-sales',
  templateUrl: './report-sales.component.html',
  styleUrls: ['./report-sales.component.css']
})
export class ReportSalesComponent implements OnInit {

  salesData:Sales[]= [];

  from: Date;
  to: Date;
  id: number;
  totalCol: any;

  customerBuffer = [];
  bufferSize = 20;
  loading = false;
  input$ = new Subject<string>();

  displayedColumns: string[] = ['sl', 'name','phone','address','date','btotal','total','discount','profit'];
  dataSource = new MatTableDataSource(this.salesData);

  constructor(public reportService: ReportService,public customerService: CustomerService) { }

  ngOnInit() {
    this.from=null;
    this.to=null;
    this.id=null;

    this.customerService.getCustomersShort(0,this.bufferSize,null).subscribe(data=>{
      this.customerBuffer = data;
    });

    this.onSearch();
  }

  fetchMore(term) {
    const len = this.customerBuffer.length;
    this.loading = true;
    this.customerService.getCustomersShort(len, this.bufferSize + len, term).subscribe(data=>{
       this.customerBuffer = this.customerBuffer.concat(data);
       this.loading = false;
    })
  }

  onSearch() {
    this.input$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      tap(()=>this.loading=true),
      switchMap(term =>  this.customerService.getCustomersShort(0,this.bufferSize,term))
    )
    .subscribe(data => {
      this.customerBuffer = data;
      this.loading=false;
    })
  }


  search(f:NgForm){
    this.reportService.getSales(this.from,this.to,this.id).subscribe(res=>{
      this.salesData = res.salesData;
      this.totalCol = res.summary;
      console.log(this.totalCol);
      this.dataSource = new MatTableDataSource(this.salesData);
    })
  }
}
