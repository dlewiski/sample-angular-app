import { Component, OnInit } from '@angular/core';
import { Post } from '../post/post';
import { PostService } from '../post/post.service' ;
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'post-new',
  templateUrl: './post-new.component.html',
  styleUrls: ['./post-new.component.css']
})
export class PostNewComponent {
  post = new Post;
  submitted: boolean = false; //check if form is submitted

  constructor(private postService: PostService) { }

  createPost(post: Post) {
    this.submitted = true;
    this.postService.createPost(post)
      .subscribe(data => { return true },
      error => {
        console.log("Error creating post");
        return Observable.throw(error);
      })
  }
}
