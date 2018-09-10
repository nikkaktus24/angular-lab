import { Injectable } from '@angular/core';
import { Item } from '../../../shared/models/';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private data: Item[] = [
        { name: 'With Color', sex: 'man', size: 'fdsfsd', price: 60, colors: ["green", "yellow"], images: 'src/app/catalog/services/data/resources/images/1.png'},
        { name: 'woman', sex: 'woman', size: ['M', 'S'], price: 3, colors: null, images: 'src/app/catalog/services/data/resources/images/1.png'},
        { name: 'woman', sex: 'woman', size: ['M', 'S'], price: 3, colors: null, images: 'src/app/catalog/services/data/resources/images/1.png'},
        { name: 'Z', sex: 'man', size: ['M', 'S'], price: 2, colors: null, images: 'src/app/catalog/services/data/resources/images/1.png'},
        { name: 'X', sex: 'man', size: ['M', 'S'], price: 3, colors: null, images: 'src/app/catalog/services/data/resources/images/1.png'},
        { name: 'D', sex: 'man', size: ['M', 'S'], price: 4, colors: null, images: 'src/app/catalog/services/data/resources/images/1.png'},
        { name: 'E', sex: 'man', size: ['M', 'S'], price: 5, colors: null, images: 'src/app/catalog/services/data/resources/images/1.png'},
    ];

    getData(): Item[] {
        return this.data;
    }

    getNormilizeData(sex: string, sortKey: string, page: number): Item[] {
        return this.data
        .filter((item: any) => {
            return item.sex === sex;
        })
        .sort((left: Item, right: Item) => {
            if (left[sortKey] > right[sortKey]) return 1;
            if (left[sortKey] < right[sortKey]) return -1;
        })
        .filter((item: any, i: number, array: Item[]) => {
            const limit = 3 * page;
            if (i >= limit - 3 && i < limit) return true;
        });
    }

}
