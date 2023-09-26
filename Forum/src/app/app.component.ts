import { Component } from '@angular/core';
import { Post } from './Post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Forum';
  post: Post | any;
  postId: number =12;

  constructor(private router:Router) {}

  navigateToDetail(): void {
      this.router.navigate(['/post', this.postId]);
  }

  navigateToComments(): void {
    this.router.navigate(['/comments',this.postId]);
  }

}
