import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

// Auth Service
import { AuthService } from '../../app/shared/services/auth';

@Component({
  selector: 'app-create-account',
  templateUrl: './sign-up.html',
  styleUrls: ['./sign-up.scss'],
})
export class SignUpComponent implements OnInit {
  constructor(public authService: AuthService) {}
  ngOnInit() {}

  // firstName = new FormControl('')
  // lastName = new FormControl('')
  // // username = new FormControl('');
  // email = new FormControl('')
  // gradDate = new FormControl('')
  // major = new FormControl('')
  // year = new FormControl('')

  // passphrase = new FormControl('')
}
