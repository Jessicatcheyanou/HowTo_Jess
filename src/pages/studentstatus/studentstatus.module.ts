import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentstatusPage } from './studentstatus';

@NgModule({
  declarations: [
    StudentstatusPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentstatusPage),
  ],
})
export class StudentstatusPageModule {}
