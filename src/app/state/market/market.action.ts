import {Action} from  "@ngrx/store";
import {Market} from "../../models/market";


export const GET_MARKET = "GET_MARKET";
export const GET_MARKET_ERROR = "GET_MARKET_ERROR";
export const GET_MARKET_SUCCESS = "GET_MARKET_SUCCESS";

// export const DELETE_MARKET = "DELETE_MARKET";
//
//
// export const UPDATE_MARKET = "UPDATE_MARKET";
// export const UPDATE_MARKET_ERROR = "UPDATE_MARKET_ERROR";
// export const UPDATE_MARKET_SUCCESS = "UPDATE_MARKET_SUCCESS";
//
// export const ADD_MARKET = "ADD_MARKET";
// export const ADD_MARKET_ERROR = "ADD_MARKET_ERROR";
// export const ADD_MARKET_SUCCESS = "ADD_MARKET_SUCCESS";
//
// export const GET_ITEM = "GET_ITEM";
// export const GET_ITEM_ERROR = "GET_ITEM_ERROR";
// export const GET_ITEM_SUCCESS = "GET_ITEM_SUCCESS";


/*
    FOR ITEMS
*/


export class GetMarket implements Action{
  readonly type = GET_MARKET;
  // constructor( ){}
}
export class GetMarketError implements Action{
  readonly type = GET_MARKET_ERROR;
  // constructor(){}
}
//Strongly type action
export class GetMarketSuccess implements Action{
  readonly type = GET_MARKET_SUCCESS;
  constructor(public payload : Market [] ){}
}



export type Actions = GetMarket | GetMarketError | GetMarketSuccess;
                          //   |  DeleteMarket |
                          // UpdateMarket| UpdateError| UpdateSuccess
                          //  | AddMarket | AddError |  AddSuccess;


                           /*
                               FOR ITEM
                           */
                           //
                           // export class GetMarket implements Action{
                           //   readonly type = GET_ITEM;
                           //   // constructor( ){}
                           // }
                           // export class GetMarketError implements Action{
                           //   readonly type = GET_ITEM_ERROR;
                           //   // constructor(){}
                           // }
                           // //Strongly type action
                           // export class GetMarketSuccess implements Action{
                           //   readonly type = GET_ITEM_SUCCESS;
                           //   constructor(public payload : Market [] ){}
                           // }
                           //
                           //
                           // /*
                           //     FOR Removing from store
                           // */
                           //
                           // export class DeleteMarket implements Action{
                           //   readonly type = DELETE_MARKET;
                           //   constructor(){}
                           // }
                           //
                           // /*
                           //     FOR Updating from store
                           // */
                           //
                           // export class UpdateMarket implements Action{
                           //   // initial actions
                           //   readonly type = UPDATE_MARKET;
                           //   // constructor( ){}
                           // }
                           //
                           // export class UpdateError implements Action{
                           //   readonly type = UPDATE_MARKET_ERROR;
                           //   // constructor(){}
                           // }
                           // //Strongly type action
                           // export class UpdateSuccess implements Action{
                           //   readonly type = UPDATE_MARKET_SUCCESS;
                           //   // pass back the updated market value
                           //   constructor(public payload : Market ){}
                           // }
                           //
                           //
                           // /*  For adding one value to the store*/
                           // export class AddMarket implements Action{
                           //   // initial actions
                           //   readonly type = ADD_MARKET;
                           //   constructor(public payload : Market ){}
                           // }
                           //
                           // export class AddError implements Action{
                           //   readonly type = ADD_MARKET_ERROR;
                           //   // constructor(){}
                           // }
                           //
                           // //Strongly type action
                           // export class AddSuccess implements Action{
                           //   readonly type = ADD_MARKET_SUCCESS;
                           //   // pass back the updated market value
                           //   constructor(public payload : Market ){}
                           // }
