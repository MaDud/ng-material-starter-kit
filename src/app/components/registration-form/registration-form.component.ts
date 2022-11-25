import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../../services/registration.service';

@Component({
  selector: 'app-registration-form',
  styleUrls: ['./registration-form.component.scss'],
  templateUrl: './registration-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationFormComponent {
  readonly registerForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    city: new FormControl(null, [Validators.required]),
    street: new FormControl(null, [Validators.required]),
    number: new FormControl(null, [Validators.required]),
    zipCode: new FormControl(null, [Validators.required, Validators.pattern("^\\d{2}-\\d{3}$")]),
    phone: new FormControl(null, [Validators.required])
  });

  constructor(private _registrationService: RegistrationService) {
  }

  onRegisterFormSubmitted(registerForm: FormGroup): void {
    this._registrationService.create({
      email: registerForm.get('email')?.value,
      username: registerForm.get('username')?.value,
      password: registerForm.get('password')?.value,
      name: {
        firstname: registerForm.get('firstName')?.value,
        lastname: registerForm.get('lastName')?.value
      },
      address: {
        city: registerForm.get('city')?.value,
        street: registerForm.get('street')?.value,
        number: registerForm.get('number')?.value,
        zipcode: registerForm.get('zipCode')?.value,
      },
      phone: registerForm.get('phone')?.value
    }).subscribe();
  }
}
