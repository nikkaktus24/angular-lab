import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data-loader/data-loader.service';
import Item from '../../services/data-loader/item';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  providers: [DataService],
})
export class CatalogComponent implements OnInit {

  constructor(private dataService: DataService) { }
  items: Item[] = [];
  ngOnInit() {
    this.items = this.dataService.getData();
  }

}
