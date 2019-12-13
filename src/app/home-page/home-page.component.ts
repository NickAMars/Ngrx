import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from '../state/app.state';
import  * as NameActions from '../state/name.action';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit {

  public name: string;
  public listItems: string[] = ["look","i", "am", "not", "dead", "yet"];
  public stateInfor;
// inject the store in the constructor
  constructor(private store: Store<AppState>) {}
  ngOnInit() {
    // dispatch an action
    // this.store.dispatch({type: 'UPDATE_NAMES'});
    // subscribe to the store
    // this.store.subscribe(state =>( console.log( state))); //this.stateInfor = state.))
  }
  addToList():void{
    // add to the list at the end
    if(this.name !== undefined ){
      this.store.dispatch(new NameActions.AddName(this.name));
      // this.listItems.push(this.name);
    }
  }

}
