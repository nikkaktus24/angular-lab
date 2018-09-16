import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data/data.service';
import { Item } from '../../../core/models';
import { Location } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-itempage',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  providers: [DataService]
})
export class ItemPageComponent implements OnInit {
  private item: Item;
  private form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private dataService: DataService,
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    this.item = this.dataService.getById(id);
  }

  ngOnInit() {
    const {
      form,
      item: {recources}
    } = this;
    if (Array.isArray(recources)) {
      this.form = new FormGroup({
        color: new FormControl(recources[0].color),
      });
    }
  }

  back() {
    this.location.back();
  }

}
