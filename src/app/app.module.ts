import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
// import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { WelcomePage } from '../pages/welcome/welcome';
import { SplashPage } from '../pages/splash/splash';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { OnboardingPage } from '../pages/onboarding/onboarding';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { StudentstatusPage } from '../pages/studentstatus/studentstatus';
import { FresherStudentPage } from '../pages/fresher-student/fresher-student';
import { CurrentStudentHomepagePage } from '../pages/current-student-homepage/current-student-homepage';
import { GraduatesPage } from '../pages/graduates/graduates';
import {ResetPasswordPage} from '../pages/reset-password/reset-password';
import {GpsPage} from '../pages/gps/gps';
import {ChatPage} from '../pages/chat/chat';
import {HelpPage} from '../pages/help/help';
import {CotconcourPage} from '../pages/cotconcour/cotconcour';
import {FhsconcourPage} from '../pages/fhsconcour/fhsconcour';
import {AsticoncourPage} from '../pages/asticoncour/asticoncour';
import { CotconcourmodalPage } from '../pages/cotconcourmodal/cotconcourmodal';




import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { GoogleMaps } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';


import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AuthService } from '../services/auth.service';
import { firebaseConfig } from '../config';
import { UserService } from '../services/user.service';
import { photoService } from '../services/photo.service';
import { HttpModule } from '@angular/http';
import { ConnectivityServiceProvider } from '../providers/connectivity-service/connectivity-service';


@NgModule({
  declarations: [
    MyApp,
    OnboardingPage,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    WelcomePage,
    SplashPage,
    HomePage,
    LoginPage,
    RegisterPage,
    StudentstatusPage,
    FresherStudentPage,
    CurrentStudentHomepagePage,
    GraduatesPage,
    ResetPasswordPage,
    GpsPage,
    ChatPage,
    HelpPage,
    CotconcourPage,
    FhsconcourPage,
    AsticoncourPage,
    CotconcourmodalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig.fire),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpModule
    // IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    WelcomePage,
    SplashPage,
    OnboardingPage,
    HomePage,
   RegisterPage,
   LoginPage,
   StudentstatusPage,
   FresherStudentPage,
   GraduatesPage,
   CurrentStudentHomepagePage,
   ResetPasswordPage,
   GpsPage,
   ChatPage,
   HelpPage,
   CotconcourPage,
   FhsconcourPage,
   AsticoncourPage,
   CotconcourmodalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    AngularFireAuth,
    AuthService,
    UserService,
    photoService,
    GoogleMaps,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConnectivityServiceProvider
  ]
})
export class AppModule {}
