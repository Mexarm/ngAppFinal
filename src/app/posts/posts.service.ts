import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

function getUrlParam(params) {
    var urlParams = "";
    for (var key in params) {
      if (urlParams != "") {
        urlParams += "&";
      }
      urlParams += key + "=" + encodeURIComponent(params[key]);
    }
    return urlParams;
  }

@Injectable()
export class PostsService {
  url = "https://jsonplaceholder.typicode.com/posts"
  constructor(private _http: Http) { }

  getPosts(filter?) {

    var url = this.url 
    if (filter)
      url +=  "?"  + getUrlParam(filter); 
    return this._http.get(url)
      .map(resp => resp.json());
  }

  getComments(postId: number) {
    return this._http.get(this.url + "/" + postId + "/comments")
      .map(resp => resp.json());
  }

  

}
