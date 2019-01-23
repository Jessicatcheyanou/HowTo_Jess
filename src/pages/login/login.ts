import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController,
  LoadingController,
  ToastController } from 'ionic-angular';

  import { AngularFirestore } from "angularfire2/firestore";
import { User } from "../../model/app.models";
import { Observable } from "rxjs";
import { ChatService } from "../../services/app.service";
import { Storage } from "@ionic/storage";
import { ChatPage } from "../chat/chat";
import { firebaseConfig } from "../../config";

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
export class LoginPage implements OnInit {
	loginForm: FormGroup;
	loginError: string;

	constructor(
		private navCtrl: NavController,
		private auth: AuthService,
		fb: FormBuilder,
    private db: AngularFirestore,
    private chatservice: ChatService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private storage: Storage
	) {
		this.loginForm = fb.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
			displayname: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
		});
	}

  ngOnInit() {
    this.storage.get("chatuser").then(chatuser => {
      if (chatuser && chatuser.email !== "") {
        this.navCtrl.push(ChatPage);
      }
    });
  }

  ionViewDidLoad(){


  }
  login() {
		// let data = this.loginForm.value;
    //
		// if (!data.email) {
		// 	return;
		// }
    //
		// let credentials = {
		// 	email: data.email,
		// 	password: data.password
		// };
		// this.auth.signInWithEmail(credentials)
		// 	.then(
		// 		() => this.navCtrl.setRoot(WelcomePage),
		// 		error => this.loginError = error.message
		// 	);
    let data = this.loginForm.value;
    if (data.email != "") {
     //Check if email already exists
     let myLoader = this.loadingCtrl.create({
       content: "Please wait..."
     });
     myLoader.present().then(() => {
       this.db
         .collection<User>(firebaseConfig.users_endpoint, ref => {
           return ref.where("email", "==", data.email);
         })
         .valueChanges()
         .subscribe(users => {

           if (users.length === 0) {
             //Register User

             //Add the timestamp
            data.time = new Date().getTime();

             this.chatservice
               .addUser(this.loginForm)
               .then(res => {
                 //Registration successful

                 this.storage.set("chatuser", this.loginForm);
                 myLoader.dismiss();

                 let toast = this.toastCtrl.create({
                   message: "Login In Successful",
                   duration: 3000,
                   position: "top"
                 });
                 toast.present();

                 this.navCtrl.push(ChatPage);
               })
               .catch(err => {
                 console.log(err);
                 myLoader.dismiss();
               });
           } else {
             //User already exists, move to chats page

             this.storage.set("chatuser", users[0]);

             let toast = this.toastCtrl.create({
               message: "Login In Successful",
               duration: 3000,
               position: "top"
             });
             toast.present();
             myLoader.dismiss();

             this.navCtrl.push(ChatPage);
           }
         });
     });
   } else {
     let toast = this.toastCtrl.create({
       message: "Enter Email to log in",
       duration: 3000,
       position: "top"
     });
     toast.present();
   }
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
