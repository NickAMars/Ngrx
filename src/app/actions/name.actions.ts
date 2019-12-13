import {Action} from  "@ngrx/store";


// export enum ActionType{
//   ADD_NAME = "",
//   REMOVE_NAME = "",
// }

export const ADD_NAME = "ADD_NAME";
export const REMOVE_NAME = "REMOVE_NAME";

//Strongly type action

export class AddName implements Action{
  readonly type = ADD_NAME;

  constructor(public payload :{ name : String[]}){}
}

export class DeleteName implements Action{
  readonly type = REMOVE_NAME;
  constructor(public payload :{ name : string }){}
}

export type Actions = AddName | DeleteName;
