import { Component } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
const STORAGE_KEY = 'signup';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {
  userData = {};
  constructor(private sqlite : SQLite,public navCtrl: NavController,public storage: Storage) {

    console.log(this.storage.get(STORAGE_KEY));
    this.getData();

  }
  getData(){

    this.sqlite.create({
      name: 'support.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('select * from users',[])
        .then(res => {
          console.log(res);
          if(res !== null){
            this.userData =res;

          }
        });
        
    });





    this.storage.get(STORAGE_KEY).then((resp) => {
      if(resp !== null){
        console.log(resp);
      //  this.userData =resp;

      }
    });
  }

  mailTo(email) {
        window.open('mailto:'+email);
  }
  callTel(phone){

    window.open('tel:'+phone);
  }
}
