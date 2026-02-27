import { Component, contentChild, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { Form, FormsModule } from "@angular/forms";
import { PostService } from "../../services/post.service";
import { Post } from "../../services/post.service";

export interface CreatePost{
  title: string;
  content: string;
}
@Component({
  selector: 'app-post',
    standalone: true,
    templateUrl: './post.component.html',
    imports: [CommonModule, RouterModule, FormsModule],
    styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit{

  posts: Post[] = [];
  post: CreatePost = {
    title: '',
    content: ''
  };

  constructor(private postService: PostService) {}

  ngOnInit(): void {
      this.loadPosts();
  }

 loadPosts(){
  this.postService.getPost().subscribe({
    next: (res) => {
      this.posts = res;
      console.log(this.posts);
    },
    error: (err) => {
      console.error(err);
    }
  });
 }

 onSubmit(){
  this.postService.addPost(this.post).subscribe({
    next: (createPost) => {
      this.posts.push(createPost)
      this.post = {
        title: '',
        content: ''
      }
    }, error: (err) => {
      console.error(err);
    }
  });
 }
}
