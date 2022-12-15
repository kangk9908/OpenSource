import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../app/shared/services/auth';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.html',
  styleUrls: ['./sign-in.scss'],
})
export class SignInComponent implements OnInit {
  title = 'Login';
  hide = false;

  constructor(public authService: AuthService) {}
  ngOnInit() {}
}
