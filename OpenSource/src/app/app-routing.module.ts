import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// pages
import { SignInComponent } from 'src/account/sign-in/sign-in';
import { PageNotFoundComponent } from 'src/account/page-not-found/page_not_found';
import { DashboardComponent } from 'src/account/dashboard/dashboard.component';
import { DevsComponent } from 'src/devs-page/devs.component';
import { SignUpComponent } from 'src/account/sign-up/sign-up';
import { RecoverAccountComponent } from 'src/account/recover-account/recover_account';
import { VerifyEmailComponent } from 'src/account/verify-email/verify-email.component';
import { CommunityPostsComponent } from './community-posts/community-posts.component';

// route guard
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'devs', component: DevsComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'recover-account', component: RecoverAccountComponent },
  { path: 'community-posts', component: CommunityPostsComponent },
  { path: 'verify-email', component: VerifyEmailComponent },
  { path: '**', component: PageNotFoundComponent }, // must be at the end of the array
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  SignInComponent,
  PageNotFoundComponent,
  DashboardComponent,
  DevsComponent,
  SignUpComponent,
  RecoverAccountComponent,
  CommunityPostsComponent,
  VerifyEmailComponent,
];
