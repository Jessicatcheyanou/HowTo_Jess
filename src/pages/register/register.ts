import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { WelcomePage } from '../welcome/welcome';
import { AuthService } from '../../services/auth.service';
import { Component } from '@angular/core';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  signupError: string;
	form: FormGroup;

  constructor(public navCtrl: NavController,fb: FormBuilder,private auth: AuthService) {
    this.form = fb.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
		});
  }

  signup() {
		let data = this.form.value;
		let credentials = {
			email: data.email,
			password: data.password
		};
		this.auth.signUp(credentials).then(
			() => this.navCtrl.setRoot(HomePage),
			error => this.signupError = error.message
		);
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  onClickWelcome(){
    this.navCtrl.setRoot(WelcomePage);
  }

}
