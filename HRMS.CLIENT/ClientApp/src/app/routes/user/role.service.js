import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@env/environment';
import { DropdownItem } from '@shared/models/dropdown-item';
import { Subject } from 'rxjs';



const BACKEND_URL = environment.baseUrl + "/role/";


@Injectable({
  providedIn: 'root',
})
export class RoleService {
  private users: Role[] = [];
  private usersUpdated = new Subject<{ users: Role[]; count: number }>();

  constructor(private http: HttpClient, private router: Router) {}

  getRoles() {
    this.http
      .get<{ message: string; users: Role[]; count: number }>(
        BACKEND_URL
      )
      .subscribe((userData) => {
        console.log(userData);
        this.users = userData.users;
        this.usersUpdated.next({
          users: [...this.users],
          count: userData.count,
        });
      });
  }

  getRoleUpdateListener() {
    return this.usersUpdated.asObservable();
  }

  getRole(id) {
    return this.http.get<Role>(BACKEND_URL + id);
  }

  getRolesShort() {
    return this.http.get<DropdownItem[]>(BACKEND_URL + "short");
  }

  addRole(user: Role) {
    return this.http
      .post<{ message: string; post: Role }>(BACKEND_URL, user);
  }

  updateRole(user: Role) {
    return this.http.put(BACKEND_URL + user.id, user);
  }

  deleteRole(id) {
    return this.http.delete(BACKEND_URL + id);
  }
}
