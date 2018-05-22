import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AuthregisterPage } from './authregister';

@NgModule({
  declarations: [
    AuthregisterPage,
  ],
  imports: [
    IonicPageModule.forChild(AuthregisterPage),
  ],
})
export class AuthregisterPageModule {}
