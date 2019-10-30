import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { Camera } from 'ionic-native';
import firebase from 'firebase';

import { photoService } from '../../services/photo.service';

/**
 * Generated class for the CotconcourPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cotconcour',
  templateUrl: 'cotconcour.html',
})
export class CotconcourPage {
    public picUrl:any;



  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController,public photo: photoService) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CotconcourPage');
  }

  snap()
   {
     this.photo.takePhoto();
   }

   upload()
   {
     this.photo.selectPhoto1();
   }

   showPic()
   {
     this.photo.getPicUrl();
   }

}
