import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UsersComponent} from './users.component';
import {UserListComponent} from './user-list/user-list.component';
import {CreateUserComponent} from './create-user/create-user.component';

const routes: Routes = [{
  path: '',
  component: UsersComponent,
  children: [{
    path: 'create-user',
    component: CreateUserComponent,
  },
    {
    path: 'user-list',
    component: UserListComponent,
  },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {
}

export const routedComponents = [
  UsersComponent,
  UserListComponent,
  CreateUserComponent,
];
