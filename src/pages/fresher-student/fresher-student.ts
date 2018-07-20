import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { CotconcourPage } from '../cotconcour/cotconcour';
import { AsticoncourPage } from '../asticoncour/asticoncour';
import { FhsconcourPage } from '../fhsconcour/fhsconcour';
import { CotconcourmodalPage } from '../cotconcourmodal/cotconcourmodal';

import { Camera } from 'ionic-native';
import firebase from 'firebase';


/**
 * Generated class for the FresherStudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fresher-student',
  templateUrl: 'fresher-student.html',
})
export class FresherStudentPage {



  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FresherStudentPage');
  }

  getCOTConcourModal(){
    const modal = this.modalCtrl.create(CotconcourmodalPage);
    modal.present();
  }

  

  onClickCOTConcour(){
    this.navCtrl.setRoot(CotconcourPage);

  }

  onClickFHSConcour(){
    this.navCtrl.setRoot(FhsconcourPage);
  }

  onClickASTIConcour(){
    this.navCtrl.setRoot(AsticoncourPage);
  }

}
