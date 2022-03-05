import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';
import { POSTS } from '../db/base-post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private arrPosts: Post[];
  private id: number;

  constructor() { 
    this.arrPosts = POSTS;
    this.id = this.arrPosts.length + 1;
  }

  

  getById(pId: number): Post | undefined {
    return this.arrPosts.find(post => post.id === pId)
  }

  

  getPostsByCategory(pCategoria: string): Post[] {
    if(pCategoria !== ""){
      return this.arrPosts.filter(post => post.categoria === pCategoria);
    }else{
      return this.arrPosts;
    }
  }
  getAllCategories(): string[] {
   let categorias = this.arrPosts.map(post=>post.categoria);
   categorias = [...new Set(categorias)];
   return categorias;
  }

  agregarPost(pInfoForm: any): boolean {
    let post: Post = { id: this.id, ...pInfoForm };
    this.arrPosts.push(post)
    this.id++;
    console.log("service", this.arrPosts)
    return true
  }

  getAll(){
    return this.arrPosts;
  }

}
