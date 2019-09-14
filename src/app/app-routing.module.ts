import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './Person/list/list.component';
import {AddComponent} from './Person/add/add.component';
import {EditComponent} from './Person/edit/edit.component';
import {ListcoinComponent} from './Coin/listcoin/listcoin.component';
import {AddCoinComponent} from './Coin/add-coin/add-coin.component';


const routes: Routes = [
  {path: 'list', component: ListComponent},
  {path: 'add', component: AddComponent},
  {path: 'edit', component: EditComponent},
  {path: 'listCoin', component: ListcoinComponent},
  {path: 'addCoin', component: AddCoinComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
