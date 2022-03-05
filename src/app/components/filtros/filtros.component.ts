import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {

  @Output() categoria: EventEmitter<string>
  arrCategorias: string[] = new Array(); 

  constructor(private postsService: PostsService) {
    this.categoria = new EventEmitter();
   }

  ngOnInit(): void {
    this.arrCategorias = this.postsService.getAllCategories();
  }
  recogerCategoria($event: any){
    this.categoria.emit($event.target.value);
    
  }

}
