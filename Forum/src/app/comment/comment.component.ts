import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  comments : Comment[] | any;
  postId:number=13;
  content : string='';

  constructor(private postService: PostService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe((Params) => {
      this.postId = Params['id'];
      this.loadComment();
    });
  }

  loadComment(): void {
    if (this.postId) {
      this.postService.getComments(this.postId).subscribe((comment) => {
        this.comments = comment;
        console.log(comment)
      });
    }
  }

  addcomment(postId:number,content:string):void{
    this.postService.addComment(postId,content).subscribe(res => this.comments = res);
  }
}
