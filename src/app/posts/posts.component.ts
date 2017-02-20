import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { UsersService } from '../users/users.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  users = [];
  posts = [];
  comments = [];
  currentPost;
  postsLoading;
  commentsLoading;


  constructor(
    private _postsService: PostsService,
    private _usersService: UsersService) {
    this.loadPosts();

  }

  ngOnInit() {
    this._usersService.getUsers()
      .subscribe(users => this.users = users);
  }

  loadPosts(filter?) {
    this.postsLoading = true;
    this.currentPost = null;
    this._postsService.getPosts(filter)
      .subscribe(r => this.posts = r,
      null,
      () => this.postsLoading = false);

  }


  selectPost(post) {
    this.currentPost = post;
    this.commentsLoading = true;
    this._postsService.getComments(post.id)
      .subscribe(r => {
        this.comments = r;
      },
      null,
      () => this.commentsLoading = false);
  }

  reloadPosts(filter) {
    this.loadPosts(filter);
  }

  onPageChanged (page) {
    this.currentPost=null;

  }
}
