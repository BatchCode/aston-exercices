import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey: string = "appid=95582ff9911bde54a52dd09c0685cd21";

  constructor(private http: HttpClient) { }

  getWeatherByCity(city: string, country: string):Observable<any> {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&${this.apiKey}`;
    console.log(url);

    return this.http.get(url)
      .pipe(map(data => data));
  }

  getWeatherByCurrentLoc(location: string) {
    const url = "";
  }
}
