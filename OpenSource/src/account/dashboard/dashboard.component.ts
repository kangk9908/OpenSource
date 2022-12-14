import { Component, OnInit } from '@angular/core'
import { AuthService } from 'src/app/shared/services/auth'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  projTitle = 'Whatever you want baby!'
  projDesc = 'Really fun Prof. Norman Project'
  imgs = ''
  constructor(public authService: AuthService) {}
  ngOnInit() {}
}
