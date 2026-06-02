import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, of } from 'rxjs';

export type Post = {
  id: number;
  title: string;
  body: string;
};

@Injectable({ providedIn: 'root' })
export class PostsApiService {
  private readonly http = inject(HttpClient);

  getPosts() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts?_limit=6').pipe(
      catchError(() => of([])),
    );
  }
}
