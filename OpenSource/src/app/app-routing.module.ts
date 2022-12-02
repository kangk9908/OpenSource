import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'recover-account',
    loadChildren: () =>
      import('./recover-account/recover-account.module').then(
        (m) => m.RecoverAccountModule,
      ),
  },
  {
    path: 'create-account',
    loadChildren: () =>
      import('./create-account/create-account.module').then(
        (m) => m.CreateAccountModule,
      ),
  },
  {
    path: 'update-account',
    loadChildren: () =>
      import('./update-account/update-account.module').then(
        (m) => m.UpdateAccountModule,
      ),
  },
  {
    path: 'user-notifications',
    loadChildren: () =>
      import('./user-notifications/user-notifications.module').then(
        (m) => m.UserNotificationsModule,
      ),
  },
  {
    path: 'project-list',
    loadChildren: () =>
      import('./project-list/project-list.module').then(
        (m) => m.ProjectListModule,
      ),
  },
  {
    path: 'project-details',
    loadChildren: () =>
      import('./project-details/project-details.module').then(
        (m) => m.ProjectDetailsModule,
      ),
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
