import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { Storage } from '@ionic/storage';
// import { OnboardingPage } from '../onboarding/onboarding';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,private auth: AuthService
    //  public storage: Storage
    ) {
  }

  ionViewDidLoad() {
    // this.storage.get('intro-done').then(done => {
    //   if (!done) {
    //     this.storage.set('intro-done', true);
    //     this.navCtrl.setRoot(OnboardingPage);
    //   }
    // });



  }




  onClickRegister(){
    this.navCtrl.setRoot(RegisterPage);
  }

  onClickLogin(){
    this.navCtrl.setRoot(LoginPage);
  }

  login() {

	this.auth.signOut();
	this.navCtrl.setRoot(LoginPage);
}

logout() {

	this.auth.signOut();
	this.navCtrl.setRoot(HomePage);
}



}
