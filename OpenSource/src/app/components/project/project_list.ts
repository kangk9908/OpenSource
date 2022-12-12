/**
 * @title Basic expansion panel
 */

import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-project_list',
  templateUrl: './project_list.html',
  styleUrls: ['./project_list.scss'],
})
export class ProjectListComponent implements OnInit {
  @Input() projTitle?: string
  @Input() projDesc?: string
  @Input() imgs?: string
  panelOpenState = false

  constructor() {
    this.projTitle = 'How old is your dad?'
    this.projDesc = 'Really fun Prof. Norman Project'
    this.imgs = ''
  }

  ngOnInit(): void {}
}
