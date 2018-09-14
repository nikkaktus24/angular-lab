import { Action } from '@ngrx/store';
import { ITEMS } from './constants';
import { Item } from '../../../../core/models/';

export class PutItems implements Action {
    readonly type = ITEMS.PUT;
    constructor(public payload: Item[]) { }
}

export type Actions = PutItems;
