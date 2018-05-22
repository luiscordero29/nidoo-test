import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
@IonicPage()
@Component({
  selector: 'page-splash-screen',
  templateUrl: 'splash-screen.html',
})
export class SplashScreenPage {
  constructor(
    public viewCtrl: ViewController, 
    public splashScreen: SplashScreen, 
    public navCtrl: NavController, 
    public navParams: NavParams
  ){}
  ionViewDidEnter() {
    this.splashScreen.hide();
    setTimeout(() => {
      this.viewCtrl.dismiss();
    }, 1000);
  }
  ionViewDidLoad() {}
}