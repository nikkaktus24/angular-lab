import { Injectable } from '@angular/core';
import Item from './item';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: Item[] = [
      { name: 'test', sex: 'men', size: ['M', 'S'], price: 56000},
  ];
  getData(): Item[] {
      return this.data;
  }
  addData(name: string, sex: string, size: any[], price: number) {
      this.data.push(new Item(name, sex, size, price));
  }
}
