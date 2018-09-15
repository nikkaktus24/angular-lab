import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Item, IItemsState } from '../../../core/models';
import { categories } from '../../../core/config';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss'],
  providers: [DataService]
})
export class GoodsComponent implements OnInit {
  @Input() sortKey$: Observable<string>;
  @Input() dashBoard: boolean;
  readonly items$: Observable<Item[]>;
  readonly goodsCategories = categories;

  private items: Item[];
  private goods: any = {};

  constructor(
    private dataService: DataService,
    private store: Store<IItemsState>,
  ) {
    this.items$ = this.store.select(state => state.catalog);
  }

  ngOnInit() {
    this.items$.subscribe((data: any) => {
      this.items = data.items;
    });

    this.sortKey$.subscribe((newSortKey) => {
      const {goodsCategories, items, goods} = this;
      goodsCategories.forEach((item, i) => {
        const {name} = item;
        goods[name] = this.dataService.normalizeData(items, name, newSortKey, 1);
      });
    });

  }

}
