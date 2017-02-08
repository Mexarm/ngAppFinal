import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { BasicValidators } from './basic-validators';
import { DialogService } from '../../dialog.service';
import { UsersService } from '../users.service';
import { User } from '../user';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  form: FormGroup;
  user = new User();
  title = '';

  constructor(
    private _fb: FormBuilder,
    private _dialogService: DialogService,
    private _usersService: UsersService,
    private _router: Router,
    private _route: ActivatedRoute) {

    this.form = this._fb.group({
      name: ['', Validators.required],
      email: ['', [BasicValidators.notValidEmail]],
      phone: [],
      address: this._fb.group({
        street: [],
        suite: [],
        city: [],
        zipcode: []
      })

    });
  }

  ngOnInit() {

    this._route.params.subscribe(params => {
      var id = +params["id"];

      this.title = id ? "Edit User" : "New User";
      if (!id)
        return;

      this._usersService.getUser(+params["id"]).subscribe(
        user => this.user = user,
        response => {
          if (response.status == 404)
            this._router.navigate(['not-found']);
        }
      )
    });


  }

  onSubmit() {
    var result;

    if (this.user.id) 
      result = this._usersService.updateUser(this.user);
    else 
      //this._usersService.createUser(this.form.value).
      this._usersService.createUser(this.user);
        
        result.subscribe(r => {
          this.form.markAsPristine();
          this._router.navigate(['users']);
        });
    }

  canDeactivate(): Promise<boolean> | boolean {
    // Allow synchronous navigation (`true`) if form is not dirty
    if (!this.form.dirty) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // promise which resolves to true or false when the user decides
    return this._dialogService.confirm('Discard changes?');
  }

}
