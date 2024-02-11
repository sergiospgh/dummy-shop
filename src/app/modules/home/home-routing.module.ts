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
      // {
      //   path: 'favorites',
      //   loadChildren: () =>
      //     import('../favorites/favorites.module').then(
      //       (m) => m.FavoritesModule
      //     ),
      // },
      { path: '', redirectTo: 'products', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
