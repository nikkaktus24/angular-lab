import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent } from '../catalog/containers/catalog/catalog.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: '../catalog/catalog.module#CatalogModule',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
