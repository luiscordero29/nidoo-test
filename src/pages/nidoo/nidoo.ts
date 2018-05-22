import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-nidoo',
  templateUrl: 'nidoo.html',
})
export class NidooPage {
  public nidoo_id: string;
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
    this.nidoo_id =navParams.get('data');
    this.fields = {
      email: '',
    }
    this.fieldsVal = {
      email: '',
    }
  }

  ionViewDidLoad() {}

  applyNidoo(){
    let loading = this.loadingCtrl.create({
      content: 'Cargando...'
    });
    loading.present();
    console.log(this.fields.email + this.nidoo_id);
    this.AuthService.endeavor(this.fields.email, this.nidoo_id).then(data => {
      this.data = data;
      if(this.data.error){
        this.fieldsVal.email = this.data.error.error.message.email;
      }
      if(this.data.status_code == '201'){
        this.fieldsVal.email = '';
        this.fields.email = '';
        let alert = this.alertCtrl.create({
          title: '',
          subTitle: 'Registrado!',
          buttons: ['OK']
        });
        alert.present();
      }
    });
    loading.dismiss(); 
  }

}
