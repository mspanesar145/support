import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SignupPage } from '../pages/signup/signup';

import { Storage } from '@ionic/storage';
const STORAGE_KEY = 'signup';

@Component({
  templateUrl: 'app.html'
})
export class Support {
  rootPage:any = SignupPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public storage: Storage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.storage.remove(STORAGE_KEY);
      this.storage.get(STORAGE_KEY).then((data)=>{
        console.log(this.storage.get(STORAGE_KEY));
        this.rootPage = data ? HomePage : SignupPage;
          })

    });
  }
}

