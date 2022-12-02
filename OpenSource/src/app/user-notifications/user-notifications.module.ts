import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserNotificationsRoutingModule } from './user-notifications-routing.module';
import { UserNotificationsComponent } from './user-notifications.component';


@NgModule({
  declarations: [
    UserNotificationsComponent
  ],
  imports: [
    CommonModule,
    UserNotificationsRoutingModule
  ]
})
export class UserNotificationsModule { }
