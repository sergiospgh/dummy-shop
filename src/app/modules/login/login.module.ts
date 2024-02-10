import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@shared/shared.module';
import { LoginFacade } from './facade/login.facade';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginEffects } from './store/effects/login.effects';
import { loginReducer } from './store/reducers/login.reducers';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    EffectsModule.forFeature([LoginEffects]),
    LoginRoutingModule,
    SharedModule,
    StoreModule.forFeature('login', loginReducer),
  ],
  providers: [LoginFacade],
})
export class LoginModule {}
