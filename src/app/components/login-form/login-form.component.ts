import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss'],
    standalone: false
})
export class LoginFormComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  onLogin(): void {
    if (this.loginForm.valid) {
      // Aquí puedes implementar la lógica para autenticar al usuario.
      // Por ejemplo, enviar los datos al servidor o realizar una comprobación local.
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;

      // En este ejemplo, simplemente mostraremos los datos en la consola.
      console.log('Username: ' + username);
      console.log('Password: ' + password);
    }
  }
}
