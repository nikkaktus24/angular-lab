import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Store } from '@ngrx/store';
import { ISortState } from '../../../core/models';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  constructor(
    private store: Store<ISortState>,
    private router: Router
  ) {
    this.router.events.subscribe((events) => {
      if (events instanceof NavigationEnd) {
        // this.change(events.id);
      }
    });
  }

}
