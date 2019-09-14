import { Component } from '@angular/core';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';
  nameCoin: string;
  Coin: {'name': string};
  constructor(private router: Router) {
  }
  list() {
    this.router.navigate(['list']);
  }

  new() {
    this.router.navigate(['add']);
  }

  listCoin() {
    this.router.navigate(['listCoin']);
  }

  listCoinByName(coinName) {
    localStorage.setItem('coinname', coinName);
    alert(coinName);
    this.router.navigate(['edit']);
  }
}
