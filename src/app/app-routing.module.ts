import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { NotFoundComponent} from './not-found.component';

import { CanDeactivateGuard } from './can-deactivate-guard.service';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: []
  },
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
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanDeactivateGuard]
})
export class AppRoutingModule { }
