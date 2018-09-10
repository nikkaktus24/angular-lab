import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICatalogState } from '../../../shared/models';
import { DataService } from '../../services/data/data.service';
import { Item } from '../../../shared/models/items';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  providers: [DataService],
})
export class CatalogComponent implements OnInit {
  @Input() man: boolean;
  @Input() woman: boolean;
  @Input() children: boolean;
  public sortKey: Observable<string>;

  public manItems: Item[];
  public womanItems: Item[];
  public childItems: Item[];

  constructor(
    private store: Store<ICatalogState>,
    private dataService: DataService,
  ) {
    this.sortKey = this.store.select(state => state.sort.key);
  }

  ngOnInit() {
    this.store.subscribe((data: ICatalogState) => {
      this.man = data.dashBoard.man;
      this.woman = data.dashBoard.woman;
      this.children = data.dashBoard.children;
    });

    this.sortKey.subscribe((newSortKey) => {
      this.manItems = this.dataService.getNormilizeData('man', newSortKey, 1);
      this.womanItems = this.dataService.getNormilizeData('woman', newSortKey, 1);
      this.childItems = this.dataService.getNormilizeData('children', newSortKey, 1);
    });
  }

}
