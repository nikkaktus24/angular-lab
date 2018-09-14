import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Item, IItemsState } from '../../../core/models';
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

  private items: Item[];
  private manItems: Item[];
  private womanItems: Item[];
  private childItems: Item[];

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
      const {items} = this;
      this.manItems = this.dataService.normalizeData(items, 'man', newSortKey, 1);
      this.womanItems = this.dataService.normalizeData(items, 'woman', newSortKey, 1);
      this.childItems = this.dataService.normalizeData(items, 'children', newSortKey, 1);
    });

  }

}
