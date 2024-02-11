import { NgModule } from '@angular/core';
import { ProductsFacade } from '@modules/home/components/products/facade/products.facade';
import { LoginFacade } from '@modules/login/facade/login.facade';

@NgModule({
  imports: [],
  exports: [],
  providers: [LoginFacade, ProductsFacade],
})
export class CoreModule {}
