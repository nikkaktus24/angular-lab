import { Action } from '@ngrx/store';
import { DASHBOARD } from './constants';

export class ToggleAction implements Action {
    readonly type = DASHBOARD.TOGGLE;
    constructor(public payload: any) { }
}

export class CheckAllAction implements Action {
    readonly type = DASHBOARD.CHECKALL;
    constructor(public payload: any) { }
}

export type Actions
  = ToggleAction
  | CheckAllAction;
