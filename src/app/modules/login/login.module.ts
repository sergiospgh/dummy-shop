import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { LoginFacade } from './facade/login.facade';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [LoginRoutingModule, SharedModule],
  providers: [LoginFacade],
})
export class LoginModule {}
