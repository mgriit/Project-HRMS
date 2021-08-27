import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerService } from 'app/routes/customer/customer.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap, switchMap } from 'rxjs/operators';
import { ReportService } from '../report.service';
import { Due } from './due.model';

@Component({
  selector: 'app-report-due',
  templateUrl: './report-due.component.html',
  styleUrls: ['./report-due.component.scss']
})
export class ReportDueComponent implements OnInit {
  dueData:Due[]= [];

  type:number;
  from: Date;
  to: Date;
  id: number;
  totalCol: any;

  customerBuffer = [];
  bufferSize = 20;
  loading = false;
  input$ = new Subject<string>();

  displayedColumns: string[] = ['sl', 'name','phone','address','date','total','discount','due','paid'];
  dataSource = new MatTableDataSource(this.dueData);

  constructor(public reportService: ReportService,public customerService: CustomerService) { }

  ngOnInit() {
    this.from=null;
    this.to=null;
    this.id=null;

    this.type = 0;

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
    this.reportService.getDue(this.from,this.to,this.id,this.type).subscribe(res=>{
      this.dueData = res.dueData;
      this.totalCol = res.summary;
      console.log(this.totalCol);
      this.dataSource = new MatTableDataSource(this.dueData);
    })
  }
}
