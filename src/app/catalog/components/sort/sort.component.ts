import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import SortActions from '../../../shared/store/actions/sort';
import { ISortState } from '../../../shared/models';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
  providers: [SortActions]
})
export class SortComponent implements OnInit {

  constructor(
    private store: Store<ISortState>,
    private sortActions: SortActions,
  ) { }

  public change(payload: string): void {
    this.store.dispatch(this.sortActions.changeKey(payload));
  }

  ngOnInit() { }

}
