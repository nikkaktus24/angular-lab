import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { IDashBoardState } from '../../../shared/models';
import { DataService } from '../../services/data/data.service';
import Item from '../../services/data/item';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  providers: [DataService],
})
export class CatalogComponent implements OnInit {
  @Input() man;
  @Input() woman;
  @Input() children;
  public items: Item[] = [];
  public manItems: Item[] = [];

  constructor(
    private store: Store<IDashBoardState>,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.items = this.dataService.getData();
    this.manItems = this.dataService.getNormilizeData('man', 'price', 1);
    this.store.subscribe((data: IDashBoardState) => {
      this.man = data.dashBoard.man;
      this.woman = data.dashBoard.woman;
      this.children = data.dashBoard.children;
    });
  }

}
