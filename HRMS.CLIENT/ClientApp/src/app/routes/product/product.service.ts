import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@env/environment';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from './product.model';

const BACKEND_URL = environment.baseUrl + "/product/";


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [];
  private productsUpdated = new Subject<{ products: Product[]; count: number }>();

  constructor(private http: HttpClient, private router: Router) {}
  getProducts() {
    this.http
      .get<{ message: string; products: any; count: number }>(
        BACKEND_URL
      )
      .pipe(
        map(data => {
          return {
            products: data.products.map(p => {
              return {
                id: p.id,
                name: p.name,
                categoryId: p.category.id,
                categoryName: p.category.name,
                supplierId: p.supplier.id,
                supplierName: p.supplier.name,
                description:p.description,
                stock: p.stock?p.stock:0,
                unit:p.unit,
                bprice: p.bprice,
                price:p.price,
                status: p.status
              };
            }),
            count: data.count
          };
        })
      )
      .subscribe((productData) => {
        console.log(productData);
        this.products = productData.products;
        this.productsUpdated.next({
          products: [...this.products],
          count: productData.count,
        });
      });
  }

  getProductUpdateListener() {
    return this.productsUpdated.asObservable();
  }

  getProduct(id) {
    return this.http.get<any>(BACKEND_URL + id)
    .pipe(
      map(data => {
        return {
            id: data.id,
            name: data.name,
            categoryId: data.category.id,
            categoryName: data.category.name,
            supplierId: data.supplier.id,
            supplierName: data.supplier.name,
            description:data.description,
            unit: data.unit,
            bprice: data.bprice,
            price: data.price
        };
      })
    );
  }

  addProduct(product: Product) {
    this.http
      .post<{ message: string; post: Product }>(BACKEND_URL, product)
      .subscribe((responseData) => {
        this.router.navigate(['/product/list']);
      });
  }

  updateProduct(product: Product) {
    this.http.put(BACKEND_URL + product.id, product).subscribe((response) => {
      this.router.navigate(['/product/list']);
    });
  }

  deleteProduct(id) {
    return this.http.delete(BACKEND_URL + id);
  }
}
