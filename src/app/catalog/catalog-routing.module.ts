import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './containers/catalog/catalog.component';
import { ItemPageComponent } from './pages/item/item.component';

const routes: Routes = [
    {
        path: '',
        component: CatalogComponent
    },
    {
        path: 'item/:id',
        component: ItemPageComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CatalogRoutingModule {}
