import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserNotificationsComponent } from './user-notifications.component';

const routes: Routes = [{ path: '', component: UserNotificationsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserNotificationsRoutingModule { }
