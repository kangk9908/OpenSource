/**
 * @title Basic expansion panel
 */

import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core'
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { Timestamp } from 'rxjs'

@Component({
  selector: 'app-project_list',
  templateUrl: './project_list.html',
  styleUrls: ['./project_list.scss'],
})
export class ProjectListComponent implements OnInit {
  @Input() projName?: string
  @Input() projDesc?: string
  @Input() progLang?: string
  @Input() specInstr?: string

  panelOpenState = false

  constructor(private db: AngularFirestore) {}

  scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight)
  }

  enterProjName(projName: string) {
    this.projName = projName
    localStorage.setItem('projName', projName)
  }
  enterProjDesc(projDesc: string) {
    this.projDesc = projDesc
    localStorage.setItem('projDesc', projDesc)
  }
  enterProgLang(progLang: string) {
    this.progLang = progLang
    localStorage.setItem('progLang', progLang)
  }
  enterSpecInstr(specInstr: string) {
    this.specInstr = specInstr
    localStorage.setItem('specInstr', specInstr)
  }
  makeProj() {
    if (this.projName !== '') {
      this.db.collection('project').add({
        projName: localStorage.getItem('projName'),
        projDesc: localStorage.getItem('projDesc'),
        progLang: localStorage.getItem('progLang'),
        specInstr: localStorage.getItem('specInstr'),
        timestamp: new Date(),
      })
    }
    this.projName = ''
    this.projDesc = ''
    this.progLang = ''
    this.projName = ''
  }
  ngOnInit(): void {}
}
