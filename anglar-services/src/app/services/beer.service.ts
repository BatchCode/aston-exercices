import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private http: HttpClient) { }
  
  getBeerByKey(key):Observable<any> {
    const url = "https://aston-b89f4.firebaseio.com/beers/" + key + ".json";
    return this.http.get(url)
      .pipe(
        tap(data => data),
        catchError(this.handleError<any>('getBeerByKey'))
      );
  }

  getBeers():Observable<any> {
    const url = "https://aston-b89f4.firebaseio.com/beers.json";
    return this.http.get(url)
      .pipe(
        tap(data => data),
        catchError(this.handleError<any>('getBeers'))
      );
  }

  addBeer(beer):Observable<any> {
    const url = "https://aston-b89f4.firebaseio.com/beers.json";
    return this.http.post(url, beer, {responseType: 'json'})
    .pipe(
      tap( product => console.log('biere ajoutee')),
      catchError(this.handleError<any>('addBeer'))
    ) 
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return (error);
    };
  }

}
