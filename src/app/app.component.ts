import { Component, ViewChild } from '@angular/core';
import { Platform, ModalController, Nav, MenuController, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { GoogleMapsPage } from '../pages/google-maps/google-maps';
import { SplashScreenPage } from '../pages/splash-screen/splash-screen';
import { AuthloginPage } from '../pages/authlogin/authlogin';
import { AuthaccountPage } from '../pages/authaccount/authaccount'
import { AuthregisterPage } from '../pages/authregister/authregister';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('myNav') nav: Nav;
  //rootPage:any = TabsPage;
  rootPage:any = GoogleMapsPage;
  public isLogin: boolean;
  
  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen, 
    modalCtrl: ModalController,
    public menuCtrl: MenuController,
    public storage: Storage,
    public events: Events,
  ){
    platform.ready().then(() => {
      statusBar.styleDefault();
      let splash = modalCtrl.create(SplashScreenPage);
      splash.present();
    });
    this.isLogin = false;
    events.subscribe('authLogin:menu', (login) => {
      this.isLogin = login;
    });
  }
  
  menu() {
    this.storage.get('id_token').then(id_token => {
      if (id_token === null) {
        this.isLogin = false;
      }else{
        this.isLogin = true;
      }
    });
  }
  
  menuOpened(){
    this.menu();
  }
  
  menuClosed(){
    this.menu();    
  }  
  
  goHome(){
    this.nav.push(TabsPage);
    this.menuCtrl.close();
  }
  
  goAuthlogin(){
    this.nav.push(AuthloginPage);
    this.menuCtrl.close();
  }
  
  goAuthlogout(){
    this.storage.remove("id_token")
    this.isLogin = false;
    this.menuCtrl.close();
    this.nav.push(TabsPage);    
  }
  
  goAuthaccount(){
    this.nav.push(AuthaccountPage);
    this.menuCtrl.close();
  }
  
  goAuthregister(){
    this.nav.push(AuthregisterPage); 
    this.menuCtrl.close();   
  }
  
  goSite(){
    this.menuCtrl.close();
  }

}