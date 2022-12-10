import { Component, OnInit } from '@angular/core'
import { Auth } from 'firebase/auth'

// Auth Service
import { AuthService } from '../../app/shared/services/auth'

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss'],
})
export class VerifyEmailComponent implements OnInit {
  constructor(public authService: AuthService) {}
  ngOnInit() {}
}
