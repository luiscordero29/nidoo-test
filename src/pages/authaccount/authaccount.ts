import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AuthPage } from '../../pages/auth/auth';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-authaccount',
  templateUrl: 'authaccount.html',
})
export class AuthaccountPage {
  
  public data: any;
  public user: any;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public storage: Storage,
    public AuthService: AuthServiceProvider,
    public events: Events,
  ){
    this.data = {};
    this.user = {
      name: "",
      lastname: "",
      company: "",
      iscompany: false,
      document_number: "",
      email: "",
      phone: "",
      mobile_phone: "",
      document_type_code: "",
      document_type_name: ""
    }
  }

  ionViewCanEnter() {
    this.storage.get('id_token').then(id_token => {
      if (id_token === null) {
        this.navCtrl.push(AuthPage);
        return false;
      }else{
        this.AuthService.islogin(id_token).then(data => {
					this.data.login = data;
					if(this.data.login.error){
						this.events.publish('authLogin:menu', false);
            this.storage.remove('id_token');
            this.navCtrl.push(AuthPage);
					}
					if(this.data.login.login){
						this.events.publish('authLogin:menu', true);
					}
				});
      }
    });
    this.loadAccount();
  }

  ionViewDidLoad() {}

  loadAccount(){
    this.storage.get('id_token').then(id_token => {
      this.AuthService.getAccount(id_token).then(data => {
        this.data = data;
        this.user = {
          name: this.data.message.user.name,
          lastname: this.data.message.user.lastname,
          company: this.data.message.user.company,
          document_number: this.data.message.user.document_number,
          email: this.data.message.user.email,
          phone: this.data.message.user.phone,
          mobile_phone: this.data.message.user.mobile_phone,
          document_type_code: this.data.message.user.document_type_code,
          document_type_name: this.data.message.user.document_type_name,
        }
        if(this.user.document_type_code != 'nit'){
          this.user.iscompany = false;
        }else{
          this.user.iscompany = true;          
        }
      })
    });
  }

}
