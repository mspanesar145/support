import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
const STORAGE_KEY = 'signup';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {
  accordianItems = [
    {
      name: 'About Us',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      
    },
    {
      name: 'Portfolio',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      name: 'Services',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      name: 'Contact',
     // description: '<ion-row><ion-item text-wrap text-center>We are happy to help you, kindly Contact us or Email us for enquiry.</ion-item><ion-item text-center><button ion-button icon-only color="secondary" large (click)="callTel(11111111)"><ion-icon name="call"></ion-icon></button><button ion-button icon-only color="secondary" large (click)=mailTo("admin@test.com")><ion-icon name="mail"></ion-icon></button></ion-item></ion-row>',
     description: "<div>We are happy to help you, kindly Contact us or Email us for enquiry.</div><div class='contact-buttons' align='center'><span style='margin: 10px;'><a href='mailto:admin@test.com' ><img src='assets/imgs/msg1-icon.png'></a></span><span style='margin: 10px;'><a href='tel:1111' class='callTo'><img src='assets/imgs/call1-icon.png'></a></span></div>",
    }

  ];
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
        console.log("******");
          console.log(res);
          if(res.rows.length > 0){

            this.userData =res.rows.item(0);

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
