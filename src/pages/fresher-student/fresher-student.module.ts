import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FresherStudentPage } from './fresher-student';

@NgModule({
  declarations: [
    FresherStudentPage,
  ],
  imports: [
    IonicPageModule.forChild(FresherStudentPage),
  ],
})
export class FresherStudentPageModule {}
