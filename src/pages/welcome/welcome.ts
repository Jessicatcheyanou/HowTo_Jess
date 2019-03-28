import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {StudentstatusPage} from '../studentstatus/studentstatus';
import {GpsPage} from '../gps/gps';
import {LoginPage} from '../login/login';
import {HelpPage} from '../help/help';
import { AuthService } from '../../services/auth.service';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private auth: AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  openStudentStatus(){
    this.navCtrl.setRoot(StudentstatusPage);
  }

  openMap(){
    this.navCtrl.setRoot(GpsPage);

  }
  openChat(){
    this.navCtrl.setRoot(LoginPage);

  }
  openHelp(){
    this.navCtrl.setRoot(HelpPage);
  }





}
