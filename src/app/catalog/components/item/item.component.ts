import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() name;
  @Input() price;
  @Input() size;
  @Input() recources;
  private form: FormGroup;

  ngOnInit() {
    if (Array.isArray(this.recources)) {
      this.form = new FormGroup({
        color: new FormControl(this.recources[0].color),
      });
    }
  }

}
