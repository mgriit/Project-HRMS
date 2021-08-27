import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Sales } from '../report-sales/sales.model';
import { ReportService } from '../report.service';
import { StockDetail } from './stock-detail.model';

@Component({
  selector: 'app-report-stock-sales',
  templateUrl: './report-stock-sales.component.html',
  styleUrls: ['./report-stock-sales.component.scss']
})
export class ReportStockSalesComponent implements OnInit {

  listData:StockDetail[]= [];

  from: Date;
  to: Date;

  displayedColumns: string[] = ['sl', 'name','category','supplier','unit','stockIn','stockOut','stock'];
  dataSource = new MatTableDataSource(this.listData);

  constructor(public reportService: ReportService) { }

  ngOnInit() {
    this.from=null;
    this.to=null;
  }

  search(f:NgForm){
    this.reportService.getStockDetail(this.from,this.to).subscribe(data=>{
      this.listData=data.data;
      this.dataSource = new MatTableDataSource(this.listData);
    })
  }
}
