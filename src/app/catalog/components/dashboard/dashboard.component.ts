import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IDashBoardState } from '../../../core/models';
import * as DashBoardAction from './redux/actions';
import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { categories } from '../../../core/config';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Input() dashBoard;
  private form: FormGroup;
  private checkBoxes = categories;

  constructor (
    private store: Store<IDashBoardState>,
    private formBuilder: FormBuilder,
  ) { }

  public toggle(index: number): void {
    const name = this.checkBoxes[index].name;
    const state: boolean = !this.form.value.checkBoxes[index];
    this.store.dispatch(new DashBoardAction.ToggleAction({[name]: state}));
  }

  public checkAll(): void {
    const newCheckBoxesState = {};
    this.form.controls['checkBoxes'].setValue(
      this.form.controls['checkBoxes'].value
          .map(value => true)
    );
    this.form.value.checkBoxes.forEach((item, i) => {
      const { name } = this.checkBoxes[i];
      newCheckBoxesState[name] = item;
    });
    this.store.dispatch(new DashBoardAction.CheckAllAction(newCheckBoxesState));
  }

  ngOnInit() {
    const controls = this.checkBoxes.map(item => new FormControl(false));

    this.form = this.formBuilder.group({
      checkBoxes: new FormArray(controls)
    });
  }

}
