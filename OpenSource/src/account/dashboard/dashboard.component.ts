import { Component, OnInit, Input } from '@angular/core'
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { AuthService } from 'src/app/shared/services/auth'

interface Item {
  projName: string
  projDesc: string
  progLang: string
  specInstr: string
  timestamp: firebase.default.firestore.Timestamp
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  projLog: Array<Item> = []
  constructor(public authService: AuthService, private db: AngularFirestore) {
    db.collection<Item>('/project', (ref) => ref.orderBy('timestamp'))
      .valueChanges()
      .subscribe((res) => {
        this.projLog = res
      })
  }
  ngOnInit() {}
}
