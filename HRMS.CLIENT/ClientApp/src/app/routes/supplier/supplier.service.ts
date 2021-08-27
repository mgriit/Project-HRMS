import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@env/environment';
import { DropdownItem } from '@shared/models/dropdown-item';
import { Subject } from 'rxjs';
import { Supplier } from './supplier.model';

const BACKEND_URL = environment.baseUrl + "/supplier/";


@Injectable({
  providedIn: 'root',
})
export class SupplierService {
  private suppliers: Supplier[] = [];
  private suppliersUpdated = new Subject<{ suppliers: Supplier[]; count: number }>();

  constructor(private http: HttpClient, private router: Router) {}
  getSuppliers(postsPerPage: number, currentPage: number) {
    const queryParams = `?pagesize=${postsPerPage}&page=${currentPage}`;
    this.http
      .get<{ message: string; suppliers: Supplier[]; count: number }>(
        BACKEND_URL
        //+ queryParams
      )
      .subscribe((supplierData) => {
        this.suppliers = supplierData.suppliers;
        this.suppliersUpdated.next({
          suppliers: [...this.suppliers],
          count: supplierData.count,
        });
      });
  }

  getSupplierUpdateListener() {
    return this.suppliersUpdated.asObservable();
  }

  getSupplier(id) {
    return this.http.get<Supplier>(BACKEND_URL + id);
  }

  getSuppliersShort() {
    return this.http.get<DropdownItem[]>(BACKEND_URL + "short");
  }

  addSupplier(supplier: Supplier) {
    return this.http
      .post<{ message: string; post: Supplier }>(BACKEND_URL, supplier);
  }

  updateSupplier(supplier: Supplier) {
    return this.http.put(BACKEND_URL + supplier.id, supplier);
  }

  deleteSupplier(id) {
    return this.http.delete(BACKEND_URL + id);
  }
}
