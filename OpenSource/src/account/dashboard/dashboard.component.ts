import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from 'src/app/shared/services/auth';

interface Item {
  projName: string;
  projDesc: string;
  progLang: string;
  specInstr: string;
  timestamp: firebase.default.firestore.Timestamp;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  projName!: string;
  projDesc!: string;
  projLang!: string;
  projSpec!: string;

  projLog: Array<Item> = [];
  constructor(public authService: AuthService, private db: AngularFirestore) {
    db.collection<Item>('/project', (ref) => ref.orderBy('timestamp'))
      .valueChanges()
      .subscribe((res) => {
        this.projLog = res;
      });
  }
  ngOnInit() {}

  makeProj() {
    if (this.projName !== '') {
      this.db.collection('project').add({
        projName: this.projName,
        projDesc: this.projDesc,
        progLang: this.projLang,
        specInstr: this.projSpec,
        timestamp: new Date(),
      });
    }
    this.projName = '';
    this.projDesc = '';
    this.projLang = '';
  }
}
