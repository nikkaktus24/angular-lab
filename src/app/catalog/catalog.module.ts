import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { CatalogComponent } from './containers/catalog/catalog.component';
import { SortComponent } from './components/sort/sort.component';
import { ItemComponent } from './components/item/item.component';
import { itemsReducer, dashBoardReducer, sortReducer } from '../core/redux/reducers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoodsComponent } from './components/goods/goods.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({ catalog: itemsReducer, sort: sortReducer, dashBoard: dashBoardReducer }),
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent,
    CatalogComponent,
    SortComponent,
    ItemComponent,
    GoodsComponent
  ],
  exports: [
    CatalogComponent
  ]
})
export class CatalogModule { }
