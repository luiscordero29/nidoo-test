import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AuthloginPage } from './authlogin';

@NgModule({
  declarations: [
    AuthloginPage,
  ],
  imports: [
    IonicPageModule.forChild(AuthloginPage),
  ],
})
export class AuthloginPageModule {}
