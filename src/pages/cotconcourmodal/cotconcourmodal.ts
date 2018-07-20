import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera } from 'ionic-native';
import firebase from 'firebase';


/**
 * Generated class for the CotconcourmodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cotconcourmodal',
  templateUrl: 'cotconcourmodal.html',
})
export class CotconcourmodalPage {
  public myPhotosRef1: any;
   public picUrl:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myPhotosRef1 = firebase.storage().ref('/cotuploadedphotos/');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CotconcourmodalPage');
  }

  getPicUrl(){
    this.myPhotosRef1.child("pic.png")
    .getDownloadURL()
        .then(response => this.picUrl = response)
        .catch(error => console.log('error', error));
  }

}
