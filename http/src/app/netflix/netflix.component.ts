import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-netflix',
  templateUrl: './netflix.component.html',
  styleUrls: ['./netflix.component.css']
})
export class NetflixComponent implements OnInit {

  MoviesList;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getFilms();
  }

  getFilms() {
    this.http.get("https://api.themoviedb.org/3/movie/top_rated?sort_by=popularity.desc&language=fr-FR&api_key=87dfa1c669eea853da609d4968d294be")
    .subscribe(data => {
      this.MoviesList = data.results;
    });
  }
}
