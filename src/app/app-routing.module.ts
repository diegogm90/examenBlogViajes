import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponentComponent } from './components/blog-component/blog-component.component';
import { FormComponent } from './components/form/form.component';
import { ViewPostComponent } from './components/view-post/view-post.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: '/blog-component' },
  { path: "blog-component", component: BlogComponentComponent },
  { path: "new", component: FormComponent },
  { path: "post/:idpost", component: ViewPostComponent },
  { path: "**", redirectTo: '/blog-component' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
