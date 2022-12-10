import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create_account.html',
  styleUrls: ['./create_account.scss'],
})
export class CreateAccountComponent {
  constructor() {}

  firstName = new FormControl('');
  lastName = new FormControl('');
  // username = new FormControl('');
  email = new FormControl('');
  gradDate = new FormControl('');
  major = new FormControl('');
  year = new FormControl('');

  passphrase = new FormControl('');
}
