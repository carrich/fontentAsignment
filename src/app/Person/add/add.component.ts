import { Component, OnInit } from '@angular/core';

import {ServiceService} from '../../Service/service.service';
import {Maket} from '../../hotel-booking';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  hotelBook: Maket = new Maket();
  constructor(private sevice: ServiceService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.hotelBook);
    this.sevice.createBoking(this.hotelBook).subscribe(res => {
        this.router.navigate(['list']);
    }, error => {
        alert('an error');
      }
      );
  }
}
