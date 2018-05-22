import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthregisterPage } from '../../pages/authregister/authregister';
import { AuthloginPage } from '../../pages/authlogin/authlogin';

@IonicPage()
@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html',
})
export class AuthPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
  ){}

  ionViewDidLoad() {}

  goAuthregister(){
    this.navCtrl.push(AuthregisterPage);
  }

  goAuthlogin(){
    this.navCtrl.push(AuthloginPage);
  }

  goAuthfacebook(){
    let alert = this.alertCtrl.create({
      title: 'Disculpe',
      subTitle: 'Opción no disponible!',
      buttons: ['OK']
    });
    alert.present();
  }
}
