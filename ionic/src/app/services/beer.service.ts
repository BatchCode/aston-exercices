import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private http: HttpClient) { }

  getBeers():Observable<any> {
    const url = "https://api.punkapi.com/v2/beers";
    
    return this.http.get(url)
    .pipe(tap(data => console.log(data)));
  }
}
