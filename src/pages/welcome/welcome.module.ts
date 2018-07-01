import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WelcomePage } from './welcome';
import { StudentstatusPage } from '../studentstatus/studentstatus';

@NgModule({
  declarations: [
    WelcomePage,
    StudentstatusPage
  ],
  imports: [
    IonicPageModule.forChild(WelcomePage),
  ],
})
export class WelcomePageModule {}
