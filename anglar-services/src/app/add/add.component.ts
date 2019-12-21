import { Component, OnInit } from '@angular/core';
import { BeerService } from '../services/beer.service';
import { Beers } from './models/beers';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  Biere: Beers[];

  constructor(private beerService: BeerService) { }

  ngOnInit() {
  }

  add(form) {

    this.Biere = form.form.value;

    console.log(this.Biere);
    this.beerService.addBeer(this.Biere)
      .subscribe(data => console.log("Data added: " + data));
      form.reset();
  }

}
