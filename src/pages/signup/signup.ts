import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ActionSheetController,Platform,ToastController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HomePage } from '../../pages/home/home';

import { Storage } from '@ionic/storage';

import { Camera } from '@ionic-native/camera';


/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
const STORAGE_KEY = 'signup';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})


export class SignupPage {

  validationsForm : FormGroup;
  imageSrc: string;


  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder : FormBuilder,public storage: Storage,public camera : Camera,public actionSheetCtrl: ActionSheetController,public platform: Platform,public  toastCtrl: ToastController) {

    this.imageSrc = "";
  		this.validationsForm = this.formBuilder.group ({

  		name : ['',Validators.required],
  		email : ['',Validators.required],
  		phone : ['',Validators.required],
  		});
  }

  presentToast(message) {
  let toast = this.toastCtrl.create({
    message:  message,
    duration: 3000,
    position: 'top'
  });
  toast.present();
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signup() {
  if(this.imageSrc==''){
    this.presentToast('Please upload profile image.');
    return false;
  }

  this.validationsForm.value['image'] = this.imageSrc;
  console.log(this.validationsForm.value); 
  
  this.storage.set(STORAGE_KEY, this.validationsForm.value);
    this.navCtrl.setRoot(HomePage);
  }

  public presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }
  public takePicture(sourceType) {
    // Create options for the Camera Dialog
    var options = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };
   
    // Get the data of an image
    this.camera.getPicture(options).then((imagePath) => {
      if (this.platform.is('android')) {
    
        this.imageSrc = this.imageSrc.replace(/^file:\/\//, '');
      this.imageSrc = imagePath;
      console.log(this.imageSrc);
      
      }
      // Special handling for Android library
      /* if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
        this.filePath.resolveNativePath(imagePath)
          .then(filePath => {
            let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
            let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
          });
      } else {
        var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
        this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
      }
    }, (err) => {
      this.presentToast('Error while selecting image.');
    }); */
  });
  }
}
