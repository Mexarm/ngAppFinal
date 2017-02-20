import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UsersRouting } from './users/users.routing';
import { PostsRouting } from './posts/posts.routing';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';

import { UsersService } from './users/users.service';
import { PostsService } from './posts/posts.service';
import { UserFormComponent } from './users/user-form/user-form.component';
import { NotFoundComponent } from './not-found.component';

//import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { DialogService } from './dialog.service';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { PaginationComponent } from './shared/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    UsersComponent,
    PostsComponent,
    UserFormComponent,
    NotFoundComponent,
    SpinnerComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    UsersRouting,
    PostsRouting,
    AppRoutingModule
  ],
  providers: [
    UsersService,
    PostsService,
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
