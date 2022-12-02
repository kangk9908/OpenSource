import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateAccountRoutingModule } from './update-account-routing.module';
import { UpdateAccountComponent } from './update-account.component';


@NgModule({
  declarations: [
    UpdateAccountComponent
  ],
  imports: [
    CommonModule,
    UpdateAccountRoutingModule
  ]
})
export class UpdateAccountModule { }
