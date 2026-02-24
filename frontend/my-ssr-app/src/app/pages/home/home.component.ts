import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import {UserService , User } from "../../services/user.service";

export interface CreateUser {
  name: string;
  email: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [CommonModule, FormsModule],
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  users: User[] = [];

  user: CreateUser = {
    name: '',
    email: ''
  };

  constructor(private userService: UserService) {}

  ngOnInit(): void {
      this.loadUsers();
  }

  loadUsers() {
    this.userService.getUser().subscribe({
      next: (res) => {
        this.users = res;
        console.log('Users list', this.users);
      },
      error: (err) => {
        console.error('Failed to get Users list', err);
      }
    });
  }

  onSubmit() {
    this.userService.addUser(this.user).subscribe({
      next: (createUser) => {
        this.users.push(createUser);
        this.user = {
          name: '',
          email: ''

        }
      }
    })
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe({
      next: () => {
        this.users = this.users.filter(u => u.id !== id);
        console.log('Deleted Successfully');
      },
      error: () => {
        console.error('Failed to delete');
      }
    })
  }
}
