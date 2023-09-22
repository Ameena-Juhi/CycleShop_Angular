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

}
