import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { Camera } from 'ionic-native';
import firebase from 'firebase';

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

 public myPhotosRef: any;
  public myPhotosRef1: any;

 public myPhoto: any;
 public myPhotoURL: any;
 public filename:any;
 public picdata:any



  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController) {

    this.alertCtrl = alertCtrl;
    this.myPhotosRef = firebase.storage().ref('/cotphotos/');
    this.myPhotosRef1 = firebase.storage().ref('/cotuploadedphotos/');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CotconcourPage');
  }

  takePhoto() : void{
    Camera.getPicture({
      quality: 100,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      encodingType: Camera.EncodingType.PNG,
      saveToPhotoAlbum: true
    }).then(imageData => {
      this.myPhoto = imageData;
      this.uploadPhoto();
    }, error => {
      console.log("ERROR -> " + JSON.stringify(error));
    });
  }

  async selectPhoto1(){
    try{
      Camera.getPicture({
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
        destinationType: Camera.DestinationType.DATA_URL,
        quality: 100,
        targetWidth: 600,
        targetHeight: 600,
        encodingType: Camera.EncodingType.JPEG,
        correctOrientation: true
      })
      .then(file_uri => {this.picdata = file_uri;
        alert(this.picdata);
        //file:///storage/sdcard/Android/data/com.i ---- packagename/cache/filename.jpg?153343

        this.myPhotosRef1.child('pic.png')
        .putString(this.picdata,'base64',{contentType:'image/jpeg'})
        .then(savepic=>{
          alert("save");

        }).catch(error=>{
          alert(error);
          alert(error.message);
          alert(error.code);
        })
      })



    }catch(e){
    }
  }


  selectPhoto(event) : void{

     Camera.getPicture({
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: Camera.DestinationType.DATA_URL,
      quality: 100,
      encodingType: Camera.EncodingType.PNG,
    }).then((imageData) => {
      this.myPhoto = event.imageData;
      this.uploadPhoto();
    }, error => {
      console.log("ERROR -> " + JSON.stringify(error));
    });
  }

  private uploadPhoto(): void {
    this.myPhotosRef1.child(`images/${this.filename}.jpg`)
      .putString(this.myPhoto, firebase.storage.StringFormat.DATA_URL)
      .then((snapshot)=> {
     // Do something here when the data is succesfully uploaded!

     this.showSuccesfulUploadAlert();
    });
  }

  private generateUUID(): any {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
  }

  showSuccesfulUploadAlert() {
    let alert = this.alertCtrl.create({
      title: 'Uploaded!',
      subTitle: 'Picture is uploaded to Firebase',
      buttons: ['OK']
    });
    alert.present();

}

}
