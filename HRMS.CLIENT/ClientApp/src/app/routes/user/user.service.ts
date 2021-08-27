import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@env/environment';
import { DropdownItem } from '@shared/models/dropdown-item';
import { Subject } from 'rxjs';

import { User } from './user.model';

const BACKEND_URL = environment.baseUrl + "/user/";


@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [];
  private usersUpdated = new Subject<{ users: User[]}>();

  constructor(private http: HttpClient, private router: Router) {}
  getUsers() {
    this.http
    .get<{ message: string; users: any;}>(
      BACKEND_URL
    )
    .subscribe((userData) => {
      this.users = userData.users.map(data=>{
        return {
          id:data.id,
          username: data.username,
          name: data.name,
          designation: data.designation,
          roleName: data.role? data.role.name : null
        }
      });
      this.usersUpdated.next({
        users: [...this.users]
      });
    });
  }

  getUserUpdateListener() {
    return this.usersUpdated.asObservable();
  }

  getUser(id) {
    return this.http.get<User>(BACKEND_URL + id);
  }

  getUsersShort() {
    return this.http.get<DropdownItem[]>(BACKEND_URL + "short");
  }

  addUser(user: User) {
    return this.http
      .post<{ message: string; post: User }>(BACKEND_URL, user);
  }

  updateUser(user: User) {
    return this.http.put(BACKEND_URL + user.id, user);
  }

  deleteUser(id) {
    return this.http.delete(BACKEND_URL + id);
  }
}
