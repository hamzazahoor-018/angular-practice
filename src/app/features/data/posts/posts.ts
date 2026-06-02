import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PostsApiService } from '../../../core/services/posts-api.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [AsyncPipe, RouterLink],
  templateUrl: './posts.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsComponent {
  private readonly postsApi = inject(PostsApiService);

  posts = toSignal(this.postsApi.getPosts(), { initialValue: [] })
}
