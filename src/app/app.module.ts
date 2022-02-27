import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { BlogComponentComponent } from './components/blog-component/blog-component.component';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    BlogComponentComponent,
    ViewPostComponent,
    CategoriasComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
