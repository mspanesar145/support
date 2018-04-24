import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

import { HomePage } from '../pages/home/home';
import { SignupPage } from '../pages/signup/signup';

import { Storage } from '@ionic/storage';
const STORAGE_KEY = 'signup';

@Component({
  templateUrl: 'app.html'
})
export class Support {
  rootPage:any = '';

  constructor(private sqlite : SQLite,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public storage: Storage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

     /*this.storage.remove(STORAGE_KEY);
      this.storage.get(STORAGE_KEY).then((data)=>{
        console.log(this.storage.get(STORAGE_KEY));
        this.rootPage = data ? HomePage : SignupPage;
          })*/

    this.sqlite.create({
      name: 'support.db',
      location: 'default'
    }).then((db: SQLiteObject) => {

    db.executeSql('CREATE TABLE IF NOT EXISTS users(rowid INTEGER PRIMARY KEY, name TEXT, email TEXT, phone TEXT,image TEXT)', {})
    .then(res => console.log('Executed SQL'))
    .catch(e => console.log(e));
      db.executeSql('select * from users',[])
        .then(res => {
        console.log("******");
          console.log(res);
          if(res.rows.length > 0){
                this.rootPage = HomePage;
              } else {
                this.rootPage = SignupPage;
              }
        });
        
    }).catch(e=>this.rootPage = SignupPage);


    });
  }
}

