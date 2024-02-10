import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginFacade } from './facade/login.facade';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly loginFacade: LoginFacade
  ) {}

  ngOnInit(): void {
    this.setForm();
  }

  onSubmit(): void {
    this.loginFacade.login({
      username: this.loginForm.value.username,
      password: this.loginForm.value.password,
    });
  }

  private setForm(): void {
    this.loginForm = this.fb.group({
      username: ['kminchelle'],
      password: ['0lelplR'],
    });
  }
}
