import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NidoosPage } from './nidoos';

@NgModule({
  declarations: [
    NidoosPage,
  ],
  imports: [
    IonicPageModule.forChild(NidoosPage),
  ],
})
export class NidoosPageModule {}
