import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, AlertController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { TabsPage } from '../../pages/tabs/tabs';
import { AuthregisterPage } from '../../pages/authregister/authregister';
import { AuthpasswordemailPage } from '../../pages/authpasswordemail/authpasswordemail';

@IonicPage()
@Component({
  selector: 'page-authlogin',
  templateUrl: 'authlogin.html',
})
export class AuthloginPage {
  public fields: any;
  public fieldsVal: any;
  public data: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public AuthService: AuthServiceProvider,
    public events: Events,
    public storage: Storage,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
  ){
    this.fields = {
      email: '',
      password: '',
    }
    this.fieldsVal = {
      email: '',
      password: '',
      login: '',
    }
  }

  ionViewDidLoad() {}

  goAuthfacebook(){
    let alert = this.alertCtrl.create({
      title: 'Disculpe',
      subTitle: 'Opción no disponible!',
      buttons: ['OK']
    });
    alert.present();
  }

  goAuthRegister(){
    this.navCtrl.push(AuthregisterPage);
  }

  goAuthPasswordEmail(){
    this.navCtrl.push(AuthpasswordemailPage);
  }

  login(){
    let loading = this.loadingCtrl.create({
      content: 'Cargando...'
    });
    loading.present();
    this.AuthService.login(this.fields.email, this.fields.password).then(data => {
      this.data = data;
      if(this.data.status == '400'){
        this.fieldsVal.email = this.data.error.error.message.email;
        this.fieldsVal.password = this.data.error.error.message.password;
      }
      if(this.data.error){
        this.fieldsVal.email = '';
        this.fieldsVal.password = '';
        this.fieldsVal.login = 'Credenciales Invalidas';
      }
      if(this.data.token){
        this.fieldsVal.email = '';
        this.fieldsVal.password = '';
        this.fieldsVal.login = '';
        this.storage.set('id_token', this.data.token);
        this.events.publish('authLogin:menu', true);
        this.navCtrl.push(TabsPage);
      }
    });
    loading.dismiss();    
  }
}
