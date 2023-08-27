import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentPipe } from '../comment.pipe';
import { Post, Comment } from '../Interface';
import { ListService } from '../shared/list.service';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  standalone: true,
  imports: [HttpClientModule, CommonModule, CommentPipe, MatListModule],
  providers: [ListService],
})
export class ListComponent implements OnInit {
  postList!: Observable<Post[]>;
  commentList!: Observable<Comment[]>;

  constructor(private listService: ListService) {}

  ngOnInit() {
    this.commentList = this.listService.getComments();
    this.postList = this.listService.getPosts();
  }

  trackById(index: number, item: Post): number {
    return item.id;
  }
}
