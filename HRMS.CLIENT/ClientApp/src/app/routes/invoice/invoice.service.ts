import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@env/environment';
import { DropdownItem } from '@shared/models/dropdown-item';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Iinvoice } from './Invoice.model';
import { InvoiceItem } from './model/invoice-item';
import { InvoiceItems } from './model/invoice-items';

const BACKEND_URL = environment.baseUrl + "/invoice/";

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private invoices: Iinvoice[] = [];
  private invoicesUpdated = new Subject<{ invoices: Iinvoice[]; count: number }>();

  constructor(private http: HttpClient, private router: Router) {}

  getInvoices(postsPerPage: number, currentPage: number, searchOn :string,q: string, sortBy: string, derection: string,from:Date,to:Date,status: string) {

    let queryParams = `?pagesize=${postsPerPage}&page=${currentPage}&sortBy=${sortBy}&derection=${derection}`;

    if(searchOn)
    {
      queryParams += `&searchOn=${searchOn}`;
    }

    if(q)
    {
      queryParams += `&q=${q}`;
    }

    if(from)
    {
      queryParams += `&from=${from}`;
    }

    if(to)
    {
      queryParams += `&to=${to}`;
    }

    if(status != '0')
    {
      queryParams += `&status=${status}`;
    }


    this.http
      .get<{ message: string; orders: any; count: number }>(
        BACKEND_URL + queryParams
      )
      .pipe(
        map(data => {
          return {
            invoices: data.orders.map(p => {
              return {
                id: p.id,
                date: p.date,
                customerId: p.customerId,
                customerName : p.customer ? p.customer.name: null,
                customerPhone : p.customer ? p.customer.phone: null,
                total: p.total,
                items:[
                  {
                    id: 'N/A',
                    productName: 'Loading...',
                    unitCost: 'Loading...',
                    quantity: 'Loading...',
                    unit : 'Loading...'
                  }
                ],
                discount: p.discount,
                due : p.due,
                grandTotal: p.paid,
                status : p.status
              };
            }),
            count: data.count
          };
        })
      )
      .subscribe((data) => {
        this.invoices = data.invoices;
        this.invoicesUpdated.next({
          invoices: [...this.invoices],
          count: data.count,
        });
      });
  }

  getInvoiceUpdateListener() {
    return this.invoicesUpdated.asObservable();
  }

  public postInvoice(invoice:InvoiceItems): Observable<any>{
    return this.http
      .post<{ message: string; invoice: InvoiceItems; }>(BACKEND_URL, invoice);
  }

  getInvoice(id) {

    return this.http.get<{message: string; orders: any;}>(BACKEND_URL + id)
    .pipe(map(x => {
      const invoice= new InvoiceItems();
      invoice.id = x.orders.id;
      invoice.customerId = x.orders.customer.id;
      invoice.name = x.orders.customer.name;
      invoice.address = x.orders.customer.address;
      invoice.mobile = x.orders.customer.phone;
      invoice.email = x.orders.customer.email;

      invoice.date = x.orders.date;
      invoice.discount = x.orders.discount;
      invoice.paid = x.orders.paid;
      invoice.lineTotal = x.orders.total;

      invoice.invoiceItems = x.orders.products.map(y=>{
        return new InvoiceItem(y.id,y.name,y.category.name,y.supplier.name,y.description,y.stock,y.price,y.bprice,y.product_order.quantity,y.unit);
      })
      return invoice;
    }));
  }

  getServicesOfInvoice(id) {
    return this.http.get<any>(BACKEND_URL + id+'/services')
    .pipe(
      map(x => x.map(data=>{
        return{
          id: data.product.id,
          productName: data.product.name,
          unitCost: data.product.price,
          quantity: data.quantity,
          unit : data.product.unit
        }
      }))
    )
  }

  getInvoicesShort() {
    return this.http.get<DropdownItem[]>(BACKEND_URL + "short");
  }

  updateInvoice(invoice: InvoiceItems) {
    return this.http.put(BACKEND_URL + invoice.id, invoice);
  }

  updatePayment(id: number,data: any) {
    return this.http.put(BACKEND_URL+'payment/' + id, data);
  }

  deleteInvoice(id) {
    return this.http.delete(BACKEND_URL + id);
  }

  returnInvoice(id) {
    return this.http.post(BACKEND_URL + 'return/',{id: id});
  }
}
