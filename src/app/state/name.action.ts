import {Action} from  "@ngrx/store";

export const ADD_NAME = "ADD_NAME";
export const REMOVE_NAME = "REMOVE_NAME";




//Strongly type action

export class AddName implements Action{
  readonly type = ADD_NAME;

  constructor(public payload : string ){}
}

export class DeleteName implements Action{
  readonly type = REMOVE_NAME;
  constructor(public payload : string ){}
}

export type Actions = AddName | DeleteName;
