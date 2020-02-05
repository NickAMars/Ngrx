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
import {EffectsModule} from '@ngrx/effects';

// get the reducer
import {nameReducer} from "./state/name.reducer";
import {marketReducer} from "./state/market/market.reducer";

import {MarketEffects} from "./state/market/market.effect";

// imort for ngModel
import { FormsModule }   from '@angular/forms';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import {IntercepterService } from "./service/access/intercepter.service";
import {MarketService } from "./service/market/market.service";
import {AuthenticationService } from "./service/token/authentication.service";
import { LoginComponent } from './login/login.component';





// create route for application
const router: Routes = [
  {
    path: "", component: LoginComponent
  },
  {
      path: "places", component: BucketListComponent
  },
  {
      path: "home", component: HomePageComponent
  }
];


/*
import the store modules to the root by using he forRoot method
*/

// StoreModule.forRoot({name:  nameReducer})
@NgModule({
  declarations: [
    AppComponent, HomePageComponent, BucketListComponent, LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( router),
    FormsModule,
    // pass in the reducer for the root state of the application
    // createa a root reducer and pass it here
    StoreModule.forRoot({name:  nameReducer , market: marketReducer }),
    EffectsModule.forRoot([MarketEffects]),
    // shows the updated store in the dev tools
    StoreDevtoolsModule.instrument(),
    HttpClientModule
  ],
  providers: [AuthenticationService,
    MarketService
    ,{ provide: HTTP_INTERCEPTORS, useClass: IntercepterService, multi:true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
