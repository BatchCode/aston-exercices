import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListeComponent } from './liste/liste.component';
import { DetailComponent } from './detail/detail.component';


const routes: Routes = [
  {path: '', component: ListeComponent},
  {path: 'add', component: AddComponent},
  {path: 'list', component: ListeComponent},
  {path: 'beer/:key', component: DetailComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
