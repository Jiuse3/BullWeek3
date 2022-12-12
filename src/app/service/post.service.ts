import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(map((ris) => ris));
  }

  delete(id: number) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}
