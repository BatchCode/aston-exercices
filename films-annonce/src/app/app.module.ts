import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmsComponent } from './films/films.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { NavComponent } from './nav/nav.component';
import { LivresComponent } from './livres/livres.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    PlaylistComponent,
    NavComponent,
    LivresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
