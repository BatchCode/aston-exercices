import { Component, OnInit } from '@angular/core';
import { Books } from '../models/books';

@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.css']
})
export class LivresComponent implements OnInit {

  BooksList: Books[] = [
    new Books("Plants VS Zombie", "BRAAAAAIIIIIN !", "zombie.png"),
    new Books("Garfield", "A fucking cat eating lasagnes", "garfield.jpeg")
  ]

  constructor() { }

  ngOnInit() {
  }

  like(book) {
    book.likes ++;
  }

  dislike(book) {
    book.likes --;
  }

  delete(i) {
    this.BooksList.splice(i);
  }

}
