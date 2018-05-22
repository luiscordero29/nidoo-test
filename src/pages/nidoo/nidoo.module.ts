import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NidooPage } from './nidoo';

@NgModule({
  declarations: [
    NidooPage,
  ],
  imports: [
    IonicPageModule.forChild(NidooPage),
  ],
})
export class NidooPageModule {}
