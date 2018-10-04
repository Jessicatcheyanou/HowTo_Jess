import { Injectable} from '@angular/core';
import { AlertController } from 'ionic-angular';
import { Camera } from 'ionic-native';
import firebase from 'firebase';




@Injectable()
export class photoService {

  public myPhotosRef: any;
   public myPhotosRef1: any;

  public myPhoto: any;
  public myPhotoURL: any;
  public filename:any;
  public picdata:any;
  public picUrl:any;


  constructor(public alertCtrl:AlertController) {

    this.alertCtrl = alertCtrl;
    this.myPhotosRef = firebase.storage().ref('/cotphotos/');
    this.myPhotosRef1 = firebase.storage().ref('/cotuploadedphotos/');

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
          this.showSuccesfulUploadAlert();

        }).getDownloadURL().then(response => this.picUrl = response).
          catch(error=>{
        this.showSuccesfulURLAlert();
        })
      })



    }catch(e){
    }
  }


  getPicUrl(){
  this.myPhotosRef1.child("pic.png")
  .getDownloadURL()
      .then(response => this.picUrl = response)
      .catch(error => console.log('error', error));
  }


  public uploadPhoto(): void {
    this.myPhotosRef1.child(`images/${this.filename}.jpg`)
      .putString(this.myPhoto, firebase.storage.StringFormat.DATA_URL)
      .then((snapshot)=> {
     // Do something here when the data is succesfully uploaded!

     this.showSuccesfulUploadAlert();
    });
  }

  showSuccesfulUploadAlert() {
    let alert = this.alertCtrl.create({
      title: 'Uploaded!',
      subTitle: 'Picture is uploaded to Firebase',
      buttons: ['OK']
    });
    alert.present();

  }

  showSuccesfulURLAlert() {
    let alert = this.alertCtrl.create({
      title: 'URL  not Saved',
      subTitle: 'Picture URL has not been saved to Firebase',
      buttons: ['OK']
    });
    alert.present();

  }
}
