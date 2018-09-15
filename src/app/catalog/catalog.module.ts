import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { CatalogComponent } from './containers/catalog/catalog.component';
import { SortComponent } from './components/sort/sort.component';
import { ItemComponent } from './components/item/item.component';
import { itemsReducer, dashBoardReducer, sortReducer } from '../core/redux/reducers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoodsComponent } from './components/goods/goods.component';
import { CarouselModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';
import { CarouselComponent } from './components/carousel/carousel.component';

registerLocaleData(localeFr, 'fr-FR', localeFrExtra);

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({ catalog: itemsReducer, sort: sortReducer, dashBoard: dashBoardReducer }),
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    WavesModule,
    ButtonsModule
  ],
  declarations: [
    DashboardComponent,
    CatalogComponent,
    SortComponent,
    ItemComponent,
    GoodsComponent,
    CarouselComponent
  ],
  exports: [
    CatalogComponent
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'fr-FR' } ],
})
export class CatalogModule { }
