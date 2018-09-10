import { Injectable } from '@angular/core';
import { SORT } from '../constants';

@Injectable()
export default class SortActions {
    public changeKey = (key: string) => ({type: SORT.CHANGE, payload: key});
}
