import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './posts.component';

import { CanDeactivateGuard } from '../can-deactivate-guard.service';

const routes: Routes = [
  {
    path: 'posts',
    component: PostsComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CanDeactivateGuard]
})
export class PostsRouting { }
