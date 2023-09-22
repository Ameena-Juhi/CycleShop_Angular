import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../Post';


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent {
  post: Post | any;
postId:number=13;

constructor(private postService: PostService, private route: ActivatedRoute){}

ngOnInit(): void {
  this.route.params.subscribe((Params) => {
    this.postId = Params['id'];
    this.loadPost();
  });
}

loadPost(): void {
  if (this.postId) {
    this.postService.getPost(this.postId).subscribe((post) => {
      this.post = post;
      console.log(post)
    });
  }
}
  
  
}
