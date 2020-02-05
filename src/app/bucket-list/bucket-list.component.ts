import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import  * as NameActions from '../state/name.action';
import {Market } from "../models/market"

@Component({
  selector: 'app-bucket-list',
  templateUrl: './bucket-list.component.html',
  styleUrls: ['./bucket-list.component.scss']
})

/*
Reading from the store
*/
export class BucketListComponent implements OnInit {
/*
Get the updated store and update it her basae on the infromation
*/
  // public names$: Observable<string[]>;
  public market$: Observable<Market[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.market$ = this.store.select('market');
      // this.names$ = this.store.select('name');
  }
  removeItem(name){
    this.store.dispatch(new NameActions.DeleteName(name));
  }
}
