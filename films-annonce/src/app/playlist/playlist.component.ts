import { Component, OnInit } from '@angular/core';
import { Musiques } from '../models/musiques';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  playlist: Musiques[] = [
    new Musiques("Viva la vida", "Coldplay"),
    new Musiques("Warriors", "Imagine Dragons")
  ]

  constructor() { }

  ngOnInit() {
  }

  like(musique) {
    musique.likes ++;
  }

  dislike(musique) {
    musique.likes --
  }

  delete(i) {
    this.playlist.splice(i)
  }

}
