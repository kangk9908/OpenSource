import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class LoginComponent {
  title = 'Login';

  userNameOrEmail = new FormControl('');
  passphrase = new FormControl('');
}
