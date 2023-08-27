import { Pipe, PipeTransform } from '@angular/core';
import { Comment } from './Interface';

@Pipe({
  name: 'commentPipe',
  standalone: true,
  pure: false,
})
export class CommentPipe implements PipeTransform {
  transform(comments: Comment[] | null, inputId: number): any {
    if (comments !== null) {
      return comments.filter((comment: Comment) => comment.postId === inputId);
    }
  }
}
