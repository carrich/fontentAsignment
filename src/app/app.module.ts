import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './Person/list/list.component';
import { AddComponent } from './Person/add/add.component';
import { EditComponent } from './Person/edit/edit.component';
import {ServiceService} from './Service/service.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ListcoinComponent } from './Coin/listcoin/listcoin.component';
import { AddCoinComponent } from './Coin/add-coin/add-coin.component';

import { ListcoinByMaketComponent } from './Coin/listcoin-by-maket/listcoin-by-maket.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent,
    EditComponent,
    ListcoinComponent,
    AddCoinComponent,
    ListcoinByMaketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
