import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private http: HttpClient) { }

// private Url = 'http://localhost:8080/bookings/all';
private Url = 'http://localhost:8080/api/v1/maketcCoins';
private UrlCoin = 'http://localhost:8080/api/v1/coins';
  private UrlCoinByName = 'http://localhost:8080/api/v1/coins/name?name=bitcoin5';
// private creatUrl = 'http://localhost:8080/bookings/create';
private creatUrl = 'http://localhost:8080/api/v1/maketcCoins';

  getSan(): Observable<any> {
    return this.http.get(this.Url);
  }

  createBoking(booking: any): Observable<any> {
    return this.http.post(this.creatUrl, booking);
  }

  getCoin(): Observable<any> {
    return this.http.get(this.UrlCoin);
  }

  creatCoin(coin: any): Observable<any> {
    return this.http.post(this.UrlCoin, coin);
  }

  getCoinByName(name: string) {
    return this.http.get('http://localhost:8080/api/v1/coins/name?name=bitcoin5' + name);
  }
}
