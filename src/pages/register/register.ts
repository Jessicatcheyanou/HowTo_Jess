import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController,AlertController,LoadingController,Loading } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { WelcomePage } from '../welcome/welcome';
import { AuthService } from '../../services/auth.service';
import { Component } from '@angular/core';
//import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';

import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { UserService } from '../../services/user.service';
import { EmailValidator } from '../../../Validators/email';



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
  public loading:Loading;
  userList: Observable<UserService[]>;


  constructor(public navCtrl: NavController,fb: FormBuilder,private auth: AuthService, public alertCtrl: AlertController, public loadingCtrl:LoadingController) {
    this.form = fb.group({
      fullname: ['', Validators.compose([Validators.required])],
      matricule: [''],
			email: ['', Validators.compose([Validators.required, EmailValidator.isValidMailFormat])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]

		});


  }

  signupUser(){
    if (!this.form.valid){
      console.log(this.form.value);
    } else {
      this.auth.signupUser(
        this.form.value.fullname,
        this.form.value.matricule,
        this.form.value.email,
        this.form.value.password)
      .then(() => {
        this.loading.dismiss().then( () => {
          this.navCtrl.setRoot(LoginPage);
        });
      }, (error) => {
        this.loading.dismiss().then( () => {
          let alert = this.alertCtrl.create({
            message: error.message,
            buttons: [
              {
                text: "Ok",
                role: 'cancel'
              }
            ]
          });
          alert.present();
        });
      });
      this.loading = this.loadingCtrl.create();
      this.loading.present();
    }




		// this.auth.signUp(credentials).then(
		// 	() => this.navCtrl.setRoot(LoginPage),
		// 	error => this.signupError = error.message
		// );
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  onClickWelcome(){
    this.navCtrl.setRoot(WelcomePage);
  }

}
