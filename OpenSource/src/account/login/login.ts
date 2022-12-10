import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../app/shared/services/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class LoginComponent implements OnInit {
  title = 'Login';
  hide = false;

  constructor(public authService: AuthService) {}
  ngOnInit() {}
}
