import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import  * as NameActions from '../state/name.action';

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
  public names$: Observable<string[]>;

  constructor(private store: Store<AppState>) {
      this.names$ = store.select('name');
  }

  ngOnInit() {}
  // this.name.subscribe(names => console.log(names));
  removeItem(name){
    this.store.dispatch(new NameActions.DeleteName(name));
  }
}
