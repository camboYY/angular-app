import { Routes } from '@angular/router';
import { CardComponentComponent } from './pages/card.component/card.component.component';
import { ProductListComponent } from './pages/product-list/product-list.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProductListComponent,
  },
  {
    path: 'card',
    pathMatch: 'full',
    component: CardComponentComponent,
  },
];
