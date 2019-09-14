import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../Service/service.service';
import { Maket} from '../../hotel-booking';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  makets: Observable<Maket[]>;
  constructor(private service: ServiceService, private router: Router, private http: HttpClient) { }
  private Url = 'http://localhost:8080/api/customers';
  ngOnInit() {
      this.service.getSan().subscribe(res => {
        console.log(res);
        this.makets = res.datas;
      });

    }

  edit(id: number) {
    localStorage.setItem('id', id.toString());
    alert(id);
    this.router.navigate(['edit']);
  }

  new() {
    this.router.navigate(['add']);
  }
}
