import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecoverAccountComponent } from './recover-account.component';

const routes: Routes = [{ path: '', component: RecoverAccountComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecoverAccountRoutingModule { }
