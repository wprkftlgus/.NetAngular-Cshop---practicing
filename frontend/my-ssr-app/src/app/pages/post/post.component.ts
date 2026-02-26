import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { Form, FormsModule } from "@angular/forms";

@Component({
  selector: 'app-post',
    standalone: true,
    templateUrl: './post.component.html',
    imports: [CommonModule, RouterModule, FormsModule],
    styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit
{

}
