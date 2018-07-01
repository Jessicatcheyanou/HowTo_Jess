import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';

import { AuthService } from '../../services/auth.service';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	loginForm: FormGroup;
	loginError: string;

	constructor(
		private navCtrl: NavController,
		private auth: AuthService,
		fb: FormBuilder
	) {
		this.loginForm = fb.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
		});
	}

  ionViewDidLoad(){
    // this.auth.afAuth.authState
    // .subscribe(
    //   user => {
    //     if (user) {
    //     this.navCtrl.setRoot(LoginPage);
    //     } else {
    //       this.navCtrl.setRoot(HomePage);
    //     }
    //   },
    //   () => {
    //     this.navCtrl.setRoot(HomePage);
    //   }
    // );
  }
  login() {
		let data = this.loginForm.value;

		if (!data.email) {
			return;
		}

		let credentials = {
			email: data.email,
			password: data.password
		};
		this.auth.signInWithEmail(credentials)
			.then(
				() => this.navCtrl.setRoot(HomePage),
				error => this.loginError = error.message
			);
	}

  logout() {

  	this.auth.signOut();
  	this.navCtrl.setRoot(HomePage);
  }

  signup(){
  this.navCtrl.push(RegisterPage);
}

loginWithGoogle(){
  this.auth.googleLogin()
    .then(
      () => this.navCtrl.setRoot(HomePage),
      error => console.log(error.message)
    );
}
}
;;
