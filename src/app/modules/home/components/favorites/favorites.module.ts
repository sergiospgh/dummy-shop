import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesComponent } from './favorites.component';

@NgModule({
  declarations: [FavoritesComponent],
  imports: [FavoritesRoutingModule, SharedModule],
  providers: [],
})
export class FavoritesModule {}
