import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChangeKey } from './redux/actions';
import { ISortState } from '../../../core/models';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent {

  constructor(
    private store: Store<ISortState>,
  ) { }

  public change(payload: string): void {
    this.store.dispatch(new ChangeKey(payload));
  }

}
