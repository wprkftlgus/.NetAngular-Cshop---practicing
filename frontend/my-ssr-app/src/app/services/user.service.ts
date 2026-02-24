import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CreateUser } from "../pages/home/home.component";

export interface User {
  id: number;
  name: string;
  email: string;
  createdAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:5077/api/User';

  constructor(private http: HttpClient) {}

  addUser(user: CreateUser): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }
  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
