import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav, ModalController } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { WelcomePage } from '../pages/welcome/welcome';
import { SplashPage } from '../pages/splash/splash';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OnboardingPage } from '../pages/onboarding/onboarding';







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

  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'OnBoard', component:OnboardingPage },
        { title: 'Hola', component:HelloIonicPage },
      { title: 'Welcome ', component: WelcomePage },
      { title: 'Back to Home Page', component: SplashPage }
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
}
