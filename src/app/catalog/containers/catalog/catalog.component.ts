import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data/data.service';
import { Item, ICatalogState } from '../../../core/models';
import { PutItems } from './redux/actions';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  providers: [DataService],
})
export class CatalogComponent implements OnInit {
  readonly dashboard$: Observable<boolean>;
  readonly sortKey$: Observable<string>;
  readonly items$: Observable<Item[]>;
  private dashBoard: any;

  constructor(
    private store: Store<ICatalogState>,
    private dataService: DataService,
  ) {
    this.sortKey$ = this.store.select(state => state.sort.key);
    this.dashboard$ = this.store.pipe(select('dashBoard'));
    this.items$ = this.store.pipe(select('catalog'));
  }

  public putItems(payload: Item[]): void {
    this.store.dispatch(new PutItems(payload));
  }

  ngOnInit() {
    this.putItems(this.dataService.getData());

    this.dashboard$.subscribe((newState) => {
      this.dashBoard = newState;
    });

  }

}
