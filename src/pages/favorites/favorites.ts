import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AuthPage } from '../../pages/auth/auth';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  public data: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public storage: Storage,
    public AuthService: AuthServiceProvider,
    public events: Events,
  ){
    this.data = {};
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
  }

  ionViewDidLoad() {}

}
