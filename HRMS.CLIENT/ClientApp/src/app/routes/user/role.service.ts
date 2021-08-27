import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@env/environment';
import { DropdownItem } from '@shared/models/dropdown-item';
import { Subject } from 'rxjs';
import { Role } from './role.model';


const BACKEND_URL = environment.baseUrl + "/role/";

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient, private router: Router) {}

  private roles: Role[] = [];
  private rolesUpdated = new Subject<{ roles: Role[]; count: number }>();


  getRoles() {
    this.http
      .get<{ message: string; roles: Role[]; count: number }>(
        BACKEND_URL
      )
      .subscribe((roleData) => {
        console.log(roleData);
        this.roles = roleData.roles;
        this.rolesUpdated.next({
          roles: [...this.roles],
          count: roleData.count,
        });
      });
  }

  getRoleUpdateListener() {
    return this.rolesUpdated.asObservable();
  }

  getRole(id) {
    return this.http.get<Role>(BACKEND_URL + id);
  }

  getRolesShort() {
    return this.http.get<DropdownItem[]>(BACKEND_URL + "short");
  }

  addRole(role: Role) {
    return this.http
      .post<{ message: string; post: Role }>(BACKEND_URL, role);
  }

  updateRole(role: Role) {
    return this.http.put(BACKEND_URL + role.id, role);
  }

  deleteRole(id) {
    return this.http.delete(BACKEND_URL + id);
  }
}
