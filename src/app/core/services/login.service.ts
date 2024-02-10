import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoreModule } from '@app/core.module';
import { ENDPOINT } from '@shared/constants/endpoints.constants';
import { LoginPayload } from '@shared/payloads/login.payload';
import { LoginResponse } from '@shared/responses/login.response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: CoreModule,
})
export class LoginService {
  constructor(private readonly http: HttpClient) {}

  login(payload: LoginPayload): Observable<LoginResponse> {
    const url = ENDPOINT.LOGIN;
    return this.http.post<LoginResponse>(url, { ...payload });
  }
}
