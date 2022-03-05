import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  @Input("mipost") post: Post | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
