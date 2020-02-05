import {Action} from '@ngrx/store'
import * as MarketAction from './market.action'
import {Market} from "../../models/market"


const initialState : Market[] = [{name:"food",cost:"20", quantity: "10"}];

export function marketReducer(state = initialState, action: MarketAction.Actions){
  switch(action.type){
    case MarketAction.GET_MARKET:
      // let newState =   [...state,action.payload];
      console.log("get market");
      return [{name:"get market",cost:"20", quantity: "10"}];
     break;

     case MarketAction.GET_MARKET_ERROR:
       // let newState =   [...state,action.payload];
       console.log("get market error");
       return [{name:"error",cost:"20", quantity: "10"}];
      break;
    case MarketAction.GET_MARKET_SUCCESS:
      console.log("get market success");
      return [...action.payload];
     break;

    default:
      return state;
  }
}
