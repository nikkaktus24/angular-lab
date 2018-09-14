import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IDashBoardState } from '../../../core/models';
import * as DashBoardAction from './redux/actions';
import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Input() dashBoard;
  private form: FormGroup;
  checkBoxes = [
    { id: 0, name: 'man' },
    { id: 1, name: 'woman' },
    { id: 2, name: 'children' },
  ];

  constructor (
    private store: Store<IDashBoardState>,
    private formBuilder: FormBuilder,
  ) { }

  public toggle(index: number): void {
    console.log(this.form.controls.checkBoxes);
    const name = this.checkBoxes[index].name;
    const state: boolean = !this.form.value.checkBoxes[index];
    const payload = {[name]: state};
    this.store.dispatch(new DashBoardAction.ToggleAction(payload));
  }

  public checkAll(): void {
    this.form.controls['checkBoxes'].setValue(
      this.form.controls['checkBoxes'].value
          .map(value => true);
    );
    this.store.dispatch(new DashBoardAction.CheckAllAction([]));
  }

  ngOnInit() {
    const controls = this.checkBoxes.map(item => new FormControl(false));

    this.form = this.formBuilder.group({
      checkBoxes: new FormArray(controls)
    });
  }

}
