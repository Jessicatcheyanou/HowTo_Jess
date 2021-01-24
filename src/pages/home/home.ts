import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { Storage } from '@ionic/storage';
// import { OnboardingPage } from '../onboarding/onboarding';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';
import { WelcomePage } from '../welcome/welcome';


import {Observable} from "rxjs/Observable";
import { User } from '../../../node_modules/firebase';
import { AuthService } from '../../services/auth.service';


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
   public user: Observable<any>;
  public userDetails: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public auth:AuthService  ) {

  }

  ionViewDidLoad() {


  }

  onClickLogin(){
    this.navCtrl.setRoot(WelcomePage);
  }

logout() {

	this.auth.logout();
  this.navCtrl.setRoot(LoginPage)

}


}
