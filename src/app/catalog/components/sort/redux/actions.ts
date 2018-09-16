import { Action } from '@ngrx/store';
import { SORT } from './constants';

export class ChangeKey implements Action {
    readonly type = SORT.SORTKEY_CHANGE;
    constructor(public payload: string) { }
}

export type Actions = ChangeKey;
