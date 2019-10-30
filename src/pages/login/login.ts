import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { NavController} from 'ionic-angular';

  // import { AngularFirestore } from "angularfire2/firestore";
import { User } from "../../model/app.models";
import { UserModel } from "../../model/user.model";
import { Observable } from "rxjs";
// import { ChatService } from "../../services/app.service";
// import { Storage } from "@ionic/storage";
import { TabsPage } from "../tabs/tabs";
import { firebaseConfig } from "../../config";

import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { WelcomePage } from '../welcome/welcome';
import { RoomPage} from '../room/room';



import { AuthService } from '../../services/auth.service';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
data = { nickname:"" };

	constructor(
		public navCtrl: NavController,public auth:AuthService
	){

  }

  logout() {

  	this.auth.logout();
  	this.navCtrl.setRoot(HomePage);

  }

  enterNickname() {
    this.navCtrl.setRoot(RoomPage, {
      nickname: this.data.nickname
    });
  }
}
