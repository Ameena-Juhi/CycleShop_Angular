import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Post } from 'src/app/Post';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  getPost(id:number): Observable<Post>{
    return this.http.get<Post>(`http://localhost:8080/newforum/post/${id}`).pipe(
      tap(res => console.log(res))
    );
  }

  getComments(id:number): Observable<Comment[]>{
    return this.http.get<Comment[]>(`http://localhost:8080/newforum/comment/${id}`).pipe(
      tap(res => console.log(res))
    );
  }

  addComment(id:number,content:string): Observable<Comment[]>{
    return this.http.post<Comment[]>(`http://localhost:8080/newforum/addComment/${id}`,{postId:id,content:content},{responseType:'json'}).pipe(
      tap(res => console.log(res))
    );
  }

}
