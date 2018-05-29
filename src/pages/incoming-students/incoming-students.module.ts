import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IncomingStudentsPage } from './incoming-students';

@NgModule({
  declarations: [
    IncomingStudentsPage,
  ],
  imports: [
    IonicPageModule.forChild(IncomingStudentsPage),
  ],
})
export class IncomingStudentsPageModule {}
