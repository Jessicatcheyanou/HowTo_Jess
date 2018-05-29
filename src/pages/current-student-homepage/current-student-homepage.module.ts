import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CurrentStudentHomepagePage } from './current-student-homepage';

@NgModule({
  declarations: [
    CurrentStudentHomepagePage,
  ],
  imports: [
    IonicPageModule.forChild(CurrentStudentHomepagePage),
  ],
})
export class CurrentStudentHomepagePageModule {}
