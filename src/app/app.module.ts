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




import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AuthService } from '../services/auth.service';
import { firebaseConfig } from '../config';
import { UserService } from '../services/user.service';
import { HttpModule } from '@angular/http';


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
    GraduatesPage
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
   CurrentStudentHomepagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireAuth,
    AuthService,
    UserService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
