import { Component,ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GpsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google: any;
@IonicPage()
@Component({
  selector: 'page-gps',
  templateUrl: 'gps.html',
})
export class GpsPage {

  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

}

  ionViewDidLoad() {
    this.map = new google.maps.Map(document.getElementById('map'), {
		center: { lat: -34.9011, lng: -56.1645 },
		zoom: 15
	});
    console.log('ionViewDidLoad GpsPage');
  }



}
