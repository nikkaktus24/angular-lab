import { Injectable } from '@angular/core';
import Item from './item';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: Item[] = [
      { name: 'man', sex: 'man', size: ['M', 'S'], price: 1},
      { name: 'woman', sex: 'woman', size: ['M', 'S'], price: 2},
      { name: 'woman', sex: 'woman', size: ['M', 'S'], price: 3},
      { name: 'man', sex: 'man', size: ['M', 'S'], price: 2},
      { name: 'man', sex: 'man', size: ['M', 'S'], price: 3},
      { name: 'man', sex: 'man', size: ['M', 'S'], price: 4},
      { name: 'man', sex: 'man', size: ['M', 'S'], price: 5},
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

  addData(name: string, sex: string, size: any[], price: number) {
      this.data.push(new Item(name, sex, size, price));
  }
}
