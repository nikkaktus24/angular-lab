import { Injectable } from '@angular/core';
import { Item } from '../../../core/models/';
import { data } from './resources/data';



@Injectable({
    providedIn: 'root'
})
export class DataService {
    private data: Item[] = data;

    getData(): Item[] {
        return this.data;
    }

    normalizeData(items: Item[], sex: string, sortKey: string, _page: number): Item[] | any[] {
        return items
        .filter((item: any) => {
            return item.sex === sex;
        })
        .sort((left: Item, right: Item) => {
            return left[sortKey] > right[sortKey] ? 1 : -1;
        });
    }

    getById(id: string) {
        return this.data.filter((item) => {
            return id === item.id;
        })[0];
    }

}
