import { Component, OnInit } from '@angular/core';
import { Maket} from '../../hotel-booking';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  hotelBook: Maket = new Maket();
  constructor(private http: HttpClient) { }

  ngOnInit() {
    const id = localStorage.getItem('id');
    this.http.get<Maket>('http://localhost:8080/bookings/' + id).subscribe(res => {
      this.hotelBook = res;
    });
  }

  onEdit() {

  }
}
