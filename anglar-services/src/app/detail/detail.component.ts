import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BeerService } from '../services/beer.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  key;
  Beer;

  constructor(private route: ActivatedRoute, private beerService: BeerService) { 
    this.route.params
      .subscribe(params => this.key = params.key);
  }

  ngOnInit() {
    this.beerService.getBeerByKey(this.key)
      .subscribe(data => this.Beer = data);
  }

}
