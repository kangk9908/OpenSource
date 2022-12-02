import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecoverAccountRoutingModule } from './recover-account-routing.module';
import { RecoverAccountComponent } from './recover-account.component';


@NgModule({
  declarations: [
    RecoverAccountComponent
  ],
  imports: [
    CommonModule,
    RecoverAccountRoutingModule
  ]
})
export class RecoverAccountModule { }
