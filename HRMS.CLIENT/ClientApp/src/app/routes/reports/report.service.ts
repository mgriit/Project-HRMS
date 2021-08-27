import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { map } from 'rxjs/operators';
import { Due } from './report-due/due.model';
import { Sales } from './report-sales/sales.model';
import { StockDetail } from './report-stock-sales/stock-detail.model';

const BACKEND_URL = environment.baseUrl + "/report/";

@Injectable({
  providedIn: 'root'
})
export class ReportService {

constructor(private http: HttpClient) { }

getStockDetail(from:Date, to:Date) {
  let queryParams = `?from=${from.toISOString()}&to=${to.toISOString()}`;
  return this.http
    .get<{message: string, data: StockDetail[]}>(
      BACKEND_URL +'stock-detail/'+ queryParams
    )
  }


  getSales(from:Date, to:Date, id:number) {
    let queryParams = `?count=all`;

    if (from) {
      queryParams += `&from=${from.toISOString()}`;
    }

    if (to) {
      queryParams += `&to=${to.toISOString()}`;
    }

    if (id) {
      queryParams += `&id=${id}`;
    }


    return this.http
    .get<{message: string, salesData: Sales[], summary: any}>(
      BACKEND_URL +'sales/'+ queryParams
    )
  }

  getDue(from:Date, to:Date, id:number,type:number){
    let queryParams = `?type=${type}`;

    if (from) {
      queryParams += `&from=${from.toISOString()}`;
    }

    if (to) {
      queryParams += `&to=${to.toISOString()}`;
    }

    if (id) {
      queryParams += `&id=${id}`;
    }


    return this.http
    .get<{message: string, dueData: Due[], summary: any}>(
      BACKEND_URL +'due/'+ queryParams
    )
  }
}
