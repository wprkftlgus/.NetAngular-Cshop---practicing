import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, retry } from "rxjs";
import { CreatePost } from "../pages/post/post.component";

export interface Post {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}

@Injectable({
  providedIn: 'root'
})

export class PostService {
  private apiurl = 'http://localhost:5077/api/Post';

  constructor(private http: HttpClient) {}

  addPost(post: CreatePost): Observable<Post> {
    return this.http.post<Post>(this.apiurl, post);
  }
  getPost(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiurl);
  }
}
