import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Maket} from '../../hotel-booking';
import {ServiceService} from '../../Service/service.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Coin} from '../../coin';

@Component({
  selector: 'app-listcoin',
  templateUrl: './listcoin.component.html',
  styleUrls: ['./listcoin.component.css']
})
export class ListcoinComponent implements OnInit {

  coins: Observable<Coin[]>;
  constructor(private service: ServiceService, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.service.getCoin().subscribe(res => {
      console.log(res);
      this.coins = res.datas;
    });

  }

  new() {
    this.router.navigate(['addCoin']);
  }
}
