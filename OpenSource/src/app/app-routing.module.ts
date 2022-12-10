import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// pages
import { LoginComponent } from 'src/account/login/login';
import { PageNotFoundComponent } from 'src/account/page-not-found/page_not_found';
import { HomeComponent } from 'src/account/home/home.component';
import { DevsComponent } from 'src/devs-page/devs.component';
import { CreateAccountComponent } from 'src/account/create-account/create_account';
import { RecoverAccountComponent } from 'src/account/recover-account/recover_account';
import { UpdateAccountComponent } from 'src/account/update-account/update_account';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'devs', component: DevsComponent },
  { path: 'sign-up', component: CreateAccountComponent },
  { path: 'update', component: UpdateAccountComponent },
  { path: 'recover-account', component: RecoverAccountComponent },
  { path: '**', component: PageNotFoundComponent }, // must be at the end of the array
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  LoginComponent,
  PageNotFoundComponent,
  HomeComponent,
  DevsComponent,
  CreateAccountComponent,
  UpdateAccountComponent,
  RecoverAccountComponent,
];
