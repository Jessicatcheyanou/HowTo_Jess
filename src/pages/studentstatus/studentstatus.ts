import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FresherStudentPage } from '../fresher-student/fresher-student';
import { CurrentStudentHomepagePage } from '../current-student-homepage/current-student-homepage';
import { GraduatesPage } from '../graduates/graduates';

/**
 * Generated class for the StudentstatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-studentstatus',
  templateUrl: 'studentstatus.html',
})
export class StudentstatusPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentstatusPage');
  }

  onClickIncoming(){
    this.navCtrl.setRoot(FresherStudentPage);
  }

  onClickCurrent(){
    this.navCtrl.setRoot(CurrentStudentHomepagePage);
  }

  onClickGraduated(){
    this.navCtrl.setRoot(GraduatesPage);
  }



}
