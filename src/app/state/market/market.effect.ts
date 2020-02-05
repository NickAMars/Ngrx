import { Injectable } from "@angular/core";

import { Effect, ofType, Actions } from "@ngrx/effects";
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import{
  GET_MARKET,
  GET_MARKET_ERROR,
  GET_MARKET_SUCCESS
} from "./market.action";

import  * as MarketActions from '../market/market.action';

import {MarketService} from "../../service/market/market.service";
import {Market} from "../../models/market";

@Injectable()

export class MarketEffects{
  constructor(
    private _actions$: Actions,
    private _marketService: MarketService){}


  @Effect()
  MarketItems$ = this._actions$.pipe(
    // listening for this action to be called
    ofType(GET_MARKET),
    // access the store infromation
    switchMap(()=> {
      console.log("inside of effect");
      return this._marketService.getMarketItems()
    })
    ,
    // call new action
    switchMap(
      ( markets : Market[])=>of(new MarketActions.GetMarketSuccess(markets))
      // ,
    // (err)=>of(new MarketActions.GetMarketError(err))
));
}
