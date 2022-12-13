import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/Homepage/home/home.component';
import { FormComponent } from './components/form/form.component';

import { ListaComponent } from './components/lista/lista.component';

import { PostsDetailsComponent } from './posts-details/posts-details.component';
const routes: Routes = [
  {
    path: 'post/:id',
    component: PostsDetailsComponent,
  },
  {
    path: 'post',
    component: ListaComponent,
  },
  {
    path: 'form',
    component: FormComponent,
  },

  {
    path: 'form/:id',
    component: FormComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
