import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts = [];
  isLoading = true;
  currentPost;
  comments = [];
  loadingComments = false;

  constructor(private _postsService: PostsService) {
    this._postsService.getPosts()
      .subscribe(r => {
        this.posts = r;
        this.isLoading = false;
      });
  }

  ngOnInit() {
  }

  selectPost(post) {
    this.currentPost = post;
    this.loadingComments = true;
    this._postsService.getComments(post.id)
      .subscribe(r => {
        this.comments = r;
      },
      null,
      () => this.loadingComments = false);
  }

}
