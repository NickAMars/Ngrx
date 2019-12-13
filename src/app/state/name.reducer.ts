import {Action} from '@ngrx/store'
import * as NameAction from './name.action'


const initialState = ["look","i", "am", "not", "dead", "yet"];

export function nameReducer(state = initialState, action: NameAction.Actions){
  switch(action.type){
    case NameAction.ADD_NAME:
      let newState =   [...state,action.payload];
      return newState;
     break;
    case NameAction.REMOVE_NAME:
      return state.filter(elem => elem !== action.payload);
     break;
    default:
      return state;
  }
}
