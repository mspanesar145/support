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
      description: 'Support4all is an independent technical support service provider for several third-party hardware and software products And is available to help you with any computer troubleshooting problem or question at any time, day or night. We can fix your computer, help you install new software, remove viruses and spyware or set-up your wireless network by using online PC log-in technology which is safe and secure while you watch. Support4all Tech Support provides all types of support related to PC, Laptop, Operating System, Windows PC, Printer, Wi-fi.It uses all the latest tools and techniques so that its clients can get what they deserve—quick solution of their protracted problems.',
      
    },
    {
      name: 'Portfolio',
      description: 'Because we never know what problem a customer might face, we make sure we are equipped to handle everything. Every single thing. Just call us, and watch your problem become ours.<ul><li>PC Technical Support</li><li>Laptop Technical Support</li><li>Tablet Technical Support</li><li>Smart Phone Technical Support</li><li>WiFI & Network Tech Support</li><li>Digital Camera</li><li>Print Tech Support</li></ul>',
    },
    {
      name: 'Services',
      description: 'Whether you are looking for tech support for your home or business, support4all has all the solutions you need. Make the best use of technology by getting expert support for problems related to PCs, peripherals, networking, and more <br><br>Realizing that some of the computer optimization and backup programs that we review may seem a bit daunting to the average computer user, What’s A Byte has researched some very helpful online technical support services that allow you fix any computer problems without having to download and install any software on your own.<ul><li>Computer Technical Support</li><li>Laptop Technical Support</li><li>Setup & Install</li><li>System Optimization</li><li>Printer Support</li><li>Usability Training</li><li>Virus Removal</li><li>Wifi & Networking Support</li><li>Diagnosis & Repair</li><li>Browser Support</li><li>Pogo game Support</li><li>Managed Services</li></ul>',
    },
    {
      name: 'Contact',
     
     description: "<div><h2>GET IN TOUCH WITH US<h2><hr></div><div>All time access to our certified engineers for any question and maintenance issue. Support4all provides computer repair and technical support for consumers and small businesses in various countries through its marketing offices and delivery centers across United States, Spain, Singapore, Mauritius and India.</div> <div class='contact-buttons' align='center'><span style='margin: 10px;'><a href='mailto:support@support4all.biz' ><img src='assets/imgs/msg1-icon.png'></a></span><span style='margin: 10px;'><a href='tel:17783201409' class='callTo'><img src='assets/imgs/call1-icon.png'></a></span></div><div align='center'>EST 11:30 to 8:30 pm)</div>",
    }
  ];
  userData = {};
  constructor(private sqlite : SQLite,public navCtrl: NavController,public storage: Storage) {

    //console.log(this.storage.get(STORAGE_KEY));
    /*//setTimeout(function(){
    var display=setInterval( function(){
      Times()},0);
  //},2000); */
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
       // console.log(resp);
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
function Times()
  {

    //
    var options = { timeZone: "America/New_York"}, // you have to know that New York in EST
    estTime = new Date();
 
  //console.log("Date and Time in EST is: " + estTime.toLocaleString("en-US", options));
    //



  /*var date=new Date();
  var time=date.toLocaleTimeString(); */
  if(document.getElementsByClassName("ESTCurrentTime")){
  document.getElementsByClassName("ESTCurrentTime")[0].innerHTML=estTime.toLocaleString("en-US", options);
  document.getElementsByClassName("ESTCurrentTime")[1].innerHTML=estTime.toLocaleString("en-US", options);
  }
  }
