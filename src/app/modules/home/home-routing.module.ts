import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'products',
        loadChildren: () =>
          import('./components/products/products.module').then(
            (m) => m.ProductsModule
          ),
      },
      {
        path: 'favorites',
        data: { favorites: true },
        loadChildren: () =>
          import('./components/products/products.module').then(
            (m) => m.ProductsModule
          ),
      },
      { path: '', redirectTo: 'products', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
