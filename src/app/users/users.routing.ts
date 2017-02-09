import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { UserFormComponent } from './user-form/user-form.component';

import { CanDeactivateGuard } from '../can-deactivate-guard.service';

const routes: Routes = [
  {
    path: 'users/:id',
    component: UserFormComponent,
    canDeactivate: [CanDeactivateGuard]
  },
  {
    path: 'users/new',
    component: UserFormComponent,
    canDeactivate: [CanDeactivateGuard]
  },
  {
    path: 'users',
    component: UsersComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CanDeactivateGuard]
})
export class UsersRouting { }
