import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaComponent } from './components/lista/lista.component';

import { PostsDetailsComponent } from './posts-details/posts-details.component';
const routes: Routes = [
  {
    path: "post/:id",
    component: PostsDetailsComponent
  },
   {
    path:"post",
    component: ListaComponent
  },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
