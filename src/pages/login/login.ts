import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { WelcomePage } from '../welcome/welcome';
import { ResetPasswordPage } from '../reset-password/reset-password';


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
				() => this.navCtrl.setRoot(WelcomePage),
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
      () => this.navCtrl.setRoot(WelcomePage),
      error => console.log(error.message)
    );
}

goToResetPassword(): void {
  this.navCtrl.push(ResetPasswordPage);
}
}
;;
