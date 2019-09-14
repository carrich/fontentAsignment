import { Component, OnInit } from '@angular/core';
import {Maket} from '../../hotel-booking';
import {ServiceService} from '../../Service/service.service';
import {Coin} from '../../coin';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-coin',
  templateUrl: './add-coin.component.html',
  styleUrls: ['./add-coin.component.css']
})
export class AddCoinComponent implements OnInit {

  coin: Coin = new Coin();
  makets: Observable<Maket[]>;
  constructor(private sevice: ServiceService, private router: Router) { }

  ngOnInit() {
    this.sevice.getSan().subscribe(res => {
      console.log(res);
      this.makets = res.datas;
    });
  }

  onSubmit() {
    console.log(this.coin);
    this.sevice.creatCoin(this.coin).subscribe(res => {
      this.router.navigate(['list']);
      }, error => {
        alert('an error');
      }
    );
  }

}
