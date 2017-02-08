import { Component, OnInit } from '@angular/core';

import { UsersService } from './users.service';
import { DialogService } from '../dialog.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users = [];
  isLoading = true;

  constructor(
    private _usersService: UsersService,
    private _dialogService: DialogService
  ) { }

  ngOnInit() {
    this._usersService.getUsers()
      .subscribe(
      users => this.users = users,
      null,
      () => this.isLoading = false);
  }

  deleteUser(user) {

    var observable = Observable.of(this._dialogService.confirm("Are you sure delete user " + user.name))

    observable.subscribe(
      result => {
        if (!result)
          return;
        this._usersService.deleteUser(user)
        .subscribe(
          res => {
            var i=this.users.indexOf(user);
            this.users.splice(i,1);
          },
          res => {
            alert("Error: Couldn't Delete User!");
          }
        );
      });
  }

}
