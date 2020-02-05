import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from '../state/app.state';
import  * as NameActions from '../state/name.action';
import  * as MarketActions from '../state/market/market.action';
import {AuthenticationService} from "../service/token/authentication.service";
import {User} from '../models/user'
import {MarketService} from '../service/market/market.service'
import { Observable } from 'rxjs'


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit {

  public name: string;
  public names$: Observable<string[]>;
  // public listItems: string[] = ["look","i", "am", "not", "dead", "yet"];
  public stateInfor;
// inject the store in the constructor
  constructor(private store: Store<AppState>
    , private market: MarketService
  ) {}
  ngOnInit() {
    this.store.dispatch(new MarketActions.GetMarket());
    this.names$ = this.store.select('name');
  }


  addToList():void{
      // this.store.dispatch(new MarketActions.GetMarket());
    // add to the list at the end
    if(this.name !== undefined ){
      this.store.dispatch(new NameActions.AddName(this.name));
      // this.listItems.push(this.name);
    }
  }

  removeItem(name){
    this.store.dispatch(new NameActions.DeleteName(name));
  }

}
