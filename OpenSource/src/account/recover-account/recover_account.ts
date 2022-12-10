import { Component, OnInit } from '@angular/core'

// Auth Service
import { AuthService } from '../../app/shared/services/auth'

@Component({
  selector: 'app-recover-account',
  templateUrl: './recover_account.html',
  styleUrls: ['./recover_account.scss'],
})
export class RecoverAccountComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}
}
