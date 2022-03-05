import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

  miPost: Post | undefined;

  constructor(private activatedRoute: ActivatedRoute,
    private postService: PostsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params=> {
      let id = parseInt(params["idpost"]);
      this.miPost = this.postService.getById(id)
    })
  }

}
