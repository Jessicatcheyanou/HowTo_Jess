import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AttestationsPage } from './attestations';

@NgModule({
  declarations: [
    AttestationsPage,
  ],
  imports: [
    IonicPageModule.forChild(AttestationsPage),
  ],
})
export class AttestationsPageModule {}
