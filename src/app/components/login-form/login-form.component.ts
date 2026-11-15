import { Component, ChangeDetectionStrategy } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class LoginFormComponent {
  loginForm: FormGroup;
  loginMessage = '';

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onLogin(): void {
    this.loginMessage = '';
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    // Este ejemplo valida los datos; no autentica ni registra credenciales.
    this.loginMessage = 'Formulario válido. La autenticación no está configurada en este ejemplo.';
  }
}
