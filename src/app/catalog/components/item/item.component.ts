import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() name;
  @Input() price;
  @Input() size;
  @Input() images;
  @Input() colors;
  constructor() { }

  ngOnInit() {
  }

}
