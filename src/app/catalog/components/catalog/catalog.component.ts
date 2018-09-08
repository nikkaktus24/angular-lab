import { Component, OnInit, Input } from '@angular/core';
// import { Store } from '@ngrx/store';
// import { IDashBoardState } from '../../../shared/models';
import { DataService } from '../../services/data-loader/data-loader.service';
import Item from '../../services/data-loader/item';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  providers: [DataService],
})
export class CatalogComponent implements OnInit {
  @Input() woman;
  constructor(
    private dataService: DataService
  ) {}
  items: Item[] = [];
  ngOnInit() {
    this.items = this.dataService.getData();
  }

}
