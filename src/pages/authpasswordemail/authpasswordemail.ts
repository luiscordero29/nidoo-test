import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-authpasswordemail',
  templateUrl: 'authpasswordemail.html',
})
export class AuthpasswordemailPage {

  public fields: any;
  public fieldsVal: any;
  public data: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public AuthService: AuthServiceProvider,
  ){
    this.fields = {
      email: '',
    }
    this.fieldsVal = {
      email: '',
    }
  }

  ionViewDidLoad() {}

  authpasswordemail(){
    let loading = this.loadingCtrl.create({
      content: 'Cargando...'
    });
    loading.present();
    this.AuthService.password(this.fields.email).then(data =>{
      this.data = data;
      console.log(data);
      if(this.data.status){
        this.fieldsVal.email = this.data.error.error.message.email; 
      }
      if(this.data.status_code){
        this.fieldsVal = {
          email: '',
        }
        this.fields = {
          email: '',
        }
        let alert = this.alertCtrl.create({
          title: '',
          subTitle: 'Correo enviado!',
          buttons: ['OK']
        });
        alert.present();
      }
    });
    loading.dismiss();    
  }

}
