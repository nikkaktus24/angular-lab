import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() id;
  @Input() name;
  @Input() price;
  @Input() size;
  @Input() recources;

  private form: FormGroup;

  constructor(
    private router: Router,
  ) { }

  redirect() {
    this.router.navigate([`catalog/item/${this.id}`]);
  }

  ngOnInit() {
    if (Array.isArray(this.recources)) {
      this.form = new FormGroup({
        color: new FormControl(this.recources[0].color),
      });
    }
  }

}
