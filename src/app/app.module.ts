import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Router module
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { BucketListComponent } from  './bucket-list/bucket-list.component';
import { HomePageComponent } from  './home-page/home-page.component';
// show the updated store in the dev tools
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
// get the store for ngrx
import {StoreModule} from "@ngrx/store";
// get the reducer
import {nameReducer} from "./state/name.reducer";

// imort for ngModel
import { FormsModule }   from '@angular/forms';



// create route for application
const router: Routes = [
  {
    path: "", component: HomePageComponent
  },
  {
      path: "places", component: BucketListComponent
  }
];


/*
import the store modules to the root by using he forRoot method
*/

// StoreModule.forRoot({name:  nameReducer})
@NgModule({
  declarations: [
    AppComponent, HomePageComponent, BucketListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( router),
    FormsModule,
    // pass in the reducer for the root state of the application
    // createa a root reducer and pass it here
    StoreModule.forRoot({name:  nameReducer}),
    // shows the updated store in the dev tools
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
