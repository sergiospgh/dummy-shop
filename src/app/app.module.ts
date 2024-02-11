import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '@app/core.module';
import { AuthInterceptor } from '@app/interceptors/auth.interceptor';
import { ProductsEffects } from '@modules/home/components/products/store/effects/products.effects';
import { productsReducer } from '@modules/home/components/products/store/reducers/products.reducers';
import { LoginEffects } from '@modules/login/store/effects/login.effects';
import { loginReducer } from '@modules/login/store/reducers/login.reducers';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    // NgRx
    StoreModule.forRoot({ login: loginReducer, products: productsReducer }),
    EffectsModule.forRoot([LoginEffects, ProductsEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      autoPause: true,
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
