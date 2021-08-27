import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@env/environment';
import { DropdownItem } from '@shared/models/dropdown-item';
import { Subject } from 'rxjs';
import { Customer } from './customer.model';

const BACKEND_URL = environment.baseUrl + "/customer/";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customers: Customer[] = [];
  private customersUpdated = new Subject<{ customers: Customer[] }>();
  constructor(private http: HttpClient, private router: Router) { }
  getCustomers() {
    this.http
      .get<{ message: string; customers: Customer[];}>(
        BACKEND_URL
      )
      .subscribe((customerData) => {
        this.customers = customerData.customers;
        this.customersUpdated.next({
          customers: [...this.customers]
        });
      });
  }

  getCustomerUpdateListener() {
    return this.customersUpdated.asObservable();
  }

  getCustomer(id) {
    return this.http.get<Customer>(BACKEND_URL + id);
  }

  getCustomersShort(offset: number, count: number, q: string) {
    let queryParams = `?offset=${offset}&count=${count}`;
    if(q){
      queryParams += `&q=${q}`;
    }
    return this.http.get<DropdownItem[]>(BACKEND_URL + "short"+ queryParams);
  }

  addCustomer(customer: Customer) {
    return this.http
      .post<{ message: string; post: Customer }>(BACKEND_URL, customer);
  }

  updateCustomer(customer: Customer) {
    return this.http.put(BACKEND_URL + customer.id, customer);
  }

  deleteCustomer(id) {
    return this.http.delete(BACKEND_URL + id);
  }
}
