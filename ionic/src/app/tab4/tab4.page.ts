import { Component, OnInit } from '@angular/core';
import { BeerService } from '../services/beer.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  lstBeers;

  constructor(private _beersServices: BeerService) {}

  ngOnInit() {
    this.getBeers();
  }

  getBeers() {
    this._beersServices.getBeers()
      .subscribe(
        (data => {
          this.lstBeers = data;
          console.log(data);
        })
      )
  }

}
