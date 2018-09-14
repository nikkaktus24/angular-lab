import { Injectable } from '@angular/core';
import { Item } from '../../../core/models/';
import { data } from './resources/data';

const COUNT_ITEMS = 3;

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
            if (left[sortKey] > right[sortKey]) return 1;
            if (left[sortKey] < right[sortKey]) return -1;
        })
        .filter((item: any, i: number, array: Item[]) => {
            const limit = COUNT_ITEMS * page;
            if (i >= limit - COUNT_ITEMS && i < limit) return true;
        });
    }

}
