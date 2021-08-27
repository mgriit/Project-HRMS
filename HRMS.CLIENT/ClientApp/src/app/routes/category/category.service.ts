import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@env/environment';
import { DropdownItem } from '@shared/models/dropdown-item';
import { Subject } from 'rxjs';

import { Category } from './category.model';

const BACKEND_URL = environment.baseUrl + "/category/";


@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private categories: Category[] = [];
  private categoriesUpdated = new Subject<{ categorys: Category[]; count: number }>();

  constructor(private http: HttpClient, private router: Router) {}
  getCategories() {
    this.http
      .get<{ message: string; categories: Category[]; count: number }>(
        BACKEND_URL
      )
      .subscribe((categoryData) => {
        console.log(categoryData);
        this.categories = categoryData.categories;
        this.categoriesUpdated.next({
          categorys: [...this.categories],
          count: categoryData.count,
        });
      });
  }

  getCategoryUpdateListener() {
    return this.categoriesUpdated.asObservable();
  }

  getCategory(id) {
    return this.http.get<Category>(BACKEND_URL + id);
  }

  getCategoriesShort() {
    return this.http.get<DropdownItem[]>(BACKEND_URL + "short");
  }

  addCategory(category: Category) {
    return this.http
      .post<{ message: string; post: Category }>(BACKEND_URL, category);
  }

  updateCategory(category: Category) {
    return this.http.put(BACKEND_URL + category.id, category);
  }

  deleteCategory(id) {
    return this.http.delete(BACKEND_URL + id);
  }
}
