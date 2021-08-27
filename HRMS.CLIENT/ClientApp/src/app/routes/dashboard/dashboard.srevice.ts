import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';

const BACKEND_URL = environment.baseUrl + "/report/";

@Injectable()
export class DashboardService {

  constructor(private http: HttpClient) {}

  getDashboard_one() {
    return this.http.get<{message: string, mData: any, wData:any}>(BACKEND_URL + "dash");
  }

  getDashBoard_two(){
    return this.http.get<{message: string, ySales: any, wSales:any, yProfit:any, wProfit:any}>(BACKEND_URL + "dash_g");
  }
}
