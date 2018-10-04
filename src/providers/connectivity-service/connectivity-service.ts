import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Network } from 'ionic-native';
import { Platform } from 'ionic-angular';

/*
  Generated class for the ConnectivityServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


declare var Connection;
@Injectable()
export class ConnectivityServiceProvider {
    onDevice: boolean;

  constructor(public http: HttpClient,public platform: Platform) {
    this.onDevice = this.platform.is('cordova');
    console.log('Hello ConnectivityServiceProvider Provider');
  }

  isOnline(): boolean {
    if(this.onDevice && Network.connection){
      return Network.connection !== Connection.NONE;
    } else {
      return navigator.onLine;
    }
  }

  isOffline(): boolean {
    if(this.onDevice && Network.connection){
      return Network.connection === Connection.NONE;
    } else {
      return !navigator.onLine;
    }
  }

}
