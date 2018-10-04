import { Component,ViewChild,ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';
import {GoogleMaps} from '@ionic-native/google-maps';
import { google } from 'google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import {ConnectivityServiceProvider} from './providers/connectivity-service/connectivity-service';

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
  @ViewChild('map') mapElement : ElementRef ;

  map:any;
  markers=[];
  coords:any;
  mapInitiaised:boolean = false;
  apiKey:AIzaSyCTfO1EnKV3BMWjx9U0bi8Wm-4H3-NoF0E;

  constructor(public navCtrl: NavController, public navParams: NavParams,public platform: Platform,public googleMaps: GoogleMaps,public geolocation:Geolocation
  public connectivityService:ConnectivityServiceProvider) {

  //   platform.ready().then(() => {
  //   //this.initializeMap();
  //     this.initMap();
  //
  // });

  this.loadGoogleMaps();


}

  ionViewDidLoad() {
  //  this.initializeMap();
    console.log('ionViewDidLoad GpsPage');

  }

  initializeMap() {
    this.geolocation.getCurrentPosition({ enableHighAccuracy: true }).then((resp) => {
        let mylocation = new google.maps.LatLng(resp.coords.latitude,resp.coords.longitude);
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
          zoom: 15,
          center: mylocation
        });
      },
      err =>{
      console.log('Error message : '+ err.message);
 }
    );
      let watch = this.geolocation.watchPosition();
      watch.subscribe((data) => {
        this.deleteMarkers();
        let updatelocation = new google.maps.LatLng(data.coords.latitude,data.coords.longitude);
        let image = 'src/assets/imgs/logo1.png';
        this.addMarker(updatelocation,image);
        this.setMapOnAll(this.map);
      });
}

addMarker(location, image) {
  let marker = new google.maps.Marker({
    position: location,
    map: this.map,
    icon: image
  });
  this.markers.push(marker);
}

setMapOnAll(map) {
  for (var i = 0; i < this.markers.length; i++) {
    this.markers[i].setMap(map);
  }
}

clearMarkers() {
  this.setMapOnAll(null);
}

deleteMarkers() {
  this.clearMarkers();
  this.markers = [];
}

loadGoogleMaps(){

    this.addConnectivityListeners();

  if(typeof google == "undefined" || typeof google.maps == "undefined"){

    console.log("Google maps JavaScript needs to be loaded.");
    this.disableMap();

    if(this.connectivityService.isOnline()){
      console.log("online, loading map");

      //Load the SDK
      window['mapInit'] = () => {
        this.initMap();
        this.enableMap();
      }

      let script = document.createElement("script");
      script.id = "googleMaps";

      if(this.apiKey){
        script.src = 'http://maps.google.com/maps/api/js?key=' + this.apiKey + '&callback=mapInit';
      } else {
        script.src = 'http://maps.google.com/maps/api/js?callback=mapInit';
      }

      document.body.appendChild(script);

    }
  }
  else {

    if(this.connectivityService.isOnline()){
      console.log("showing map");
      this.initMap();
      this.enableMap();
    }
    else {
      console.log("disabling map");
      this.disableMap();
    }

  }

  }

  initMap(){

    this.mapInitialised = true;

    Geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    });

  }

  disableMap(){
    console.log("disable map");
  }

  enableMap(){
    console.log("enable map");
  }

  addConnectivityListeners(){

    let onOnline = () => {

      setTimeout(() => {
        if(typeof google == "undefined" || typeof google.maps == "undefined"){

          this.loadGoogleMaps();

        } else {

          if(!this.mapInitialised){
            this.initMap();
          }

          this.enableMap();
        }
      }, 2000);

    };

    let onOffline = () => {
      this.disableMap();
    };

    document.addEventListener('online', onOnline, false);
    document.addEventListener('offline', onOffline, false);

  }



}
