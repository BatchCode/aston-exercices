import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  weatherData = [];

  constructor(private _weatherService: WeatherService) {}

  ionViewWillEnter() {
    this.getWeatherData();
  }

  getWeatherData() {
    this._weatherService.getWeatherByCity("Paris", "fr")
      .subscribe(data => {
        this.weatherData = data;
        console.log(data);
      });
  }

  getWeatherByCurrentLoc() {
    this._weatherService.getWeatherByCurrentLoc();
  }
}
