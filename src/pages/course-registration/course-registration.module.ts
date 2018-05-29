import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CourseRegistrationPage } from './course-registration';

@NgModule({
  declarations: [
    CourseRegistrationPage,
  ],
  imports: [
    IonicPageModule.forChild(CourseRegistrationPage),
  ],
})
export class CourseRegistrationPageModule {}
