import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsComponent } from './films/films.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { LivresComponent } from './livres/livres.component';


const routes: Routes = [
  {path: '', component: PlaylistComponent},
  {path: 'films', component: FilmsComponent},
  {path: 'musiques', component: PlaylistComponent},
  {path: 'livres', component: LivresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
