import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import DashBoardActions from '../../../shared/store/actions/dashboard';
import { IDashBoardState } from '../../../shared/models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DashBoardActions]
})
export class DashboardComponent implements OnInit {
  @Input() man;
  @Input() woman;
  @Input() children;

  constructor (
    private store: Store<IDashBoardState>,
    private dashBoardActions:  DashBoardActions,
  ) { }

  public toggle(payload: any): void {
    this.store.dispatch(this.dashBoardActions.toggle(payload));
  }

  public checkAll(payload: any): void {
    this.store.dispatch(this.dashBoardActions.checkAll());
  }

  ngOnInit() {
    this.store.subscribe((data: IDashBoardState) => {
      this.man = data.dashBoard.man;
      this.woman = data.dashBoard.woman;
      this.children = data.dashBoard.children;
    });
  }

}
