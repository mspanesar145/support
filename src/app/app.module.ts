import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';

import { Support } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignupPage } from '../pages/signup/signup';

import { SignupProvider } from '../providers/signup/signup';

import { IonicStorageModule } from '@ionic/storage';

import { SQLite } from '@ionic-native/sqlite';
import {AccordionListComponent} from '../components/accordion-list/accordion-list';


@NgModule({
  declarations: [
    Support,
    HomePage,
    SignupPage,
    AccordionListComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(Support),
     IonicStorageModule.forRoot({
      name: '__support',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  exports: [AccordionListComponent],
  bootstrap: [IonicApp],
  entryComponents: [
    Support,
    HomePage,
    SignupPage
  ],
  providers: [
    SignupProvider,
    StatusBar,
    SplashScreen,
    Camera,
    SQLite,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    
  ]
})
export class AppModule {





}
