import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav, ModalController } from 'ionic-angular';


import { WelcomePage } from '../pages/welcome/welcome';
import { SplashPage } from '../pages/splash/splash';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OnboardingPage } from '../pages/onboarding/onboarding';
import { HomePage } from '../pages/home/home';

import { AuthService } from '../services/auth.service';








@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = OnboardingPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public modalCtrl: ModalController,
    public auth: AuthService

  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Home', component:HomePage },
      { title: 'Welcome ', component: WelcomePage },
      { title: 'OnBoard', component: OnboardingPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      // display custom splash screen
      let splash = this.modalCtrl.create(SplashPage);
          splash.present();
    });


  }



  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

  logout() {

  	this.auth.logout();
  	this.nav.setRoot(HomePage);
  }
}
