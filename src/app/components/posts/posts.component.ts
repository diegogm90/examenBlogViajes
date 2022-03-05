import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  arrPosts: Post[] = new Array();

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.arrPosts = this.postsService.getAll();
  }

}