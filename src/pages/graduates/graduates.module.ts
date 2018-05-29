import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GraduatesPage } from './graduates';

@NgModule({
  declarations: [
    GraduatesPage,
  ],
  imports: [
    IonicPageModule.forChild(GraduatesPage),
  ],
})
export class GraduatesPageModule {}
