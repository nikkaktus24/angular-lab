import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { CatalogComponent } from './components/catalog/catalog.component';
import { SortComponent } from './components/sort/sort.component';
import { ItemComponent } from './components/item/item.component';
import { dashBoardReducer, sortReducer } from '../shared/store/reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({ sort: sortReducer, dashBoard: dashBoardReducer }),
    SharedModule
  ],
  declarations: [
    DashboardComponent,
    CatalogComponent,
    SortComponent,
    ItemComponent
  ],
  exports: [
    CatalogComponent
  ]
})
export class CatalogModule { }
