import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AuthaccountPage } from './authaccount';

@NgModule({
  declarations: [
    AuthaccountPage,
  ],
  imports: [
    IonicPageModule.forChild(AuthaccountPage),
  ],
})
export class AuthaccountPageModule {}
