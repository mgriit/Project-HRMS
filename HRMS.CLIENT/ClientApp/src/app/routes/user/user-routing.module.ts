import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserUpdateComponent } from './user-update/user-update.component';


const routes: Routes = [
  {
    path: "list",
    component: UserListComponent
  },
  {
    path: "create",
    component: UserCreateComponent
  },
  {
    path: "edit/:id",
    component: UserUpdateComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
