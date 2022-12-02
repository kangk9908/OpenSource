import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateAccountComponent } from './update-account.component';

const routes: Routes = [{ path: '', component: UpdateAccountComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateAccountRoutingModule { }
