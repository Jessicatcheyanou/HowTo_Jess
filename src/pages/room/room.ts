import { Component, OnInit } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import {firebaseConfig } from "../../config";


import { AddroomPage } from '../addroom/addroom';
import { ChatPage } from '../chat/chat';
import * as firebase from 'Firebase';

/**
 * Generated class for the RoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 export const snapshotToArray = snapshot => {
    let returnArr = [];

    snapshot.forEach(childSnapshot => {
        let item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });

    return returnArr;
 };


@IonicPage()
@Component({
  selector: 'page-room',
  templateUrl: 'room.html',
})


export class RoomPage {

  rooms = [];
ref = firebase.database().ref('chatrooms/');

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {


    this.ref.on('value', resp => {
    this.rooms = [];
    this.rooms = snapshotToArray(resp);
  });
  }


addRoom() {
  this.navCtrl.push(AddroomPage);
}
joinRoom(key) {
  this.navCtrl.setRoot(ChatPage, {
    key:key,
    nickname:this.navParams.get("nickname")
  });
}

  ngOnInit() {

  }

}
