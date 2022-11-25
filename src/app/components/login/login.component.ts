import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  readonly loginForm: FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.min(4)])
  });

  constructor(private _loginService: LoginService) {
  }

  onLoginFormSubmitted(loginForm: FormGroup): void {
    this._loginService.login({
      password: loginForm.get('password')?.value,
      username: loginForm.get('username')?.value
    }).subscribe({next: () => alert('Success')});
  }
}
