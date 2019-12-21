import { Component, OnInit } from '@angular/core';
import { Movies } from '../models/movies';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  liste: Movies[] = [
    new Movies('Le roi lion', 'Walt Disney', 'Ceci est une histoire de la vie'),
    new Movies('La reine des neiges', 'Walt Disney', 'JE NE M\'EN TIRERAIS PLUS JAMAIIIIS')
  ]

  constructor() { }

  ngOnInit() {
  }

  like(film) {
    film.like ++;
  }

  dislike(film) {
    film.like --;
  }

  delete(i) {
    this.liste.splice(i, 1);
  }

}
