import { Injectable } from '@angular/core';
import { Item } from '../../../core/models/';
import { COUNT_ITEMS } from '../../../core/config';
import { data } from './resources/data';



@Injectable({
    providedIn: 'root'
})
export class DataService {
    private data: Item[] = data;

    getData(): Item[] {
        return this.data;
    }

    normalizeData(items: Item[], sex: string, sortKey: string, page: number): Item[] | any[] {
        return items
        .filter((item: any) => {
            return item.sex === sex;
        })
        .sort((left: Item, right: Item) => {
            return left[sortKey] > right[sortKey] ? 1 : -1;
        })
        .filter((item: any, i: number, array: Item[]) => {
            const limit = COUNT_ITEMS * page;
            return (i >= limit - COUNT_ITEMS && i < limit);
        });
    }

}
