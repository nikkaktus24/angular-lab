import { Injectable } from '@angular/core';
import { ITEMS } from '../constants';
import { Item } from '../../models/';

@Injectable()
export default class SortActions {
    public changeKey = (items: Item[]) => ({type: ITEMS.PUT, payload: items});
}
