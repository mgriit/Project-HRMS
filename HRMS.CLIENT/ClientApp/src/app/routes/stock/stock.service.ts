import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Stock } from './stock.model';

const BACKEND_URL = environment.baseUrl + "/stock/";

@Injectable({
  providedIn: 'root'
})
export class StockService {

constructor(private http: HttpClient) { }

  createStock(stock: Stock) {
    return this.http
      .post<{ message: string; stock: Stock }>(BACKEND_URL, stock)
  }
}
