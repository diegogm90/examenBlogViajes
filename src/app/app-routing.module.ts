import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { FormComponent } from './components/form/form.component';
import { ViewPostComponent } from './components/view-post/view-post.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: '/posts' },
  { path: "posts", component: PostsComponent },
  { path: "new", component: FormComponent },
  { path: "post/:idpost", component: ViewPostComponent, children: [] },
  { path: "**", redirectTo: '/posts' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
