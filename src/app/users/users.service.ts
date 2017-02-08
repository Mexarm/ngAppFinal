import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {
  url = "https://jsonplaceholder.typicode.com/users"
  constructor(private _http: Http) { }

  getUsers() {
    return this._http.get(this.url)
      .map(res => res.json());
  }

  createUser(user) {
    return this._http.post(this.url, JSON.stringify(user))
      .map(res => res.json());
  }

  getUser(id: number) {
    return this._http.get(this.url + "/" + id.toString())
      .map(res => res.json());
  }

  updateUser(user) {
    return this._http.put(this.url + "/" + user.id, JSON.stringify(user))
      .map(res => res.json());
  }

  deleteUser(user) {
    return this._http.delete(this.url + "/" + user.id )
      .map(res => res.json());

  }
}
