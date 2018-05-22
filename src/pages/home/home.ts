import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { NavController, AlertController, Events, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { GoogleMapsPage } from './../google-maps/google-maps';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { NidooServiceProvider } from '../../providers/nidoo-service/nidoo-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	
	public data: any;
	public items: string[];
	
	constructor(
		public navCtrl: NavController, 
		public alertCtrl: AlertController,
		public AuthService: AuthServiceProvider,
		public NidooService: NidooServiceProvider,
		public storage: Storage,
		public events: Events,
		public geolocation: Geolocation,
		private platform: Platform,
	){
		this.data = {
			google_address: ''
		};
	}

	ionViewCanEnter() {
		this.isLogin();
		/*	
		this.geolocation.getCurrentPosition().then(pos => {
			console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
		});
		*/
	
	}
	
	ionViewDidLoad() {}

    getItems(ev: any) {
		this.items = [];
		/* 
		*	set address 
		*/
		let address = ev.target.value;
		/*
		* search address on google maps
		*/
		if(address.length > 0){
			let search = 'Colombia, ' + address;
			this.NidooService.searchAddress(search).then(data => {
				this.data.address = data;
				if (this.data.address.status != 'OK') {
					let alert = this.alertCtrl.create({
						title: 'Error',
						subTitle: 'Ingrese una dirección valida!',
						buttons: ['OK']
					});
					alert.present();
					this.data.google_address = '';
					this.items = [];
				}else{
					for (let i = 0; i < this.data.address.results.length; i++) {
						let elements = this.data.address.results[i].address_components;
						let element = '';
						for (let i = 0; i < elements.length; i++) {
							if(elements[i].types[0] == 'route'){
								if(elements[i].long_name){
									element = elements[i].long_name;
								}
							}
							if(elements[i].types[0] == 'locality'){
								if(elements[i].long_name){
									if(element.length>0){
										element = element + ', ' + elements[i].long_name;
										
									}else{
										element = elements[i].long_name;
									}
								}
							}
							if(elements[i].types[0] == 'country'){
								if(elements[i].long_name){
									if(element.length>0){
										element = element + ', ' + elements[i].long_name;
										
									}else{
										element = elements[i].long_name;
									}
								}
							}
						}
						this.items.push(element);
					}
				}
			});
		}
		/* 
		*	filtrar direccion 
		*/
    	if (address && address.trim() != '') {
			if(this.items.length>0){
				this.items = this.items.filter((item) => {
					return (item.toLowerCase().indexOf(address.toLowerCase()) > -1);
				});
			}
		}
	}
	
	goGoogleMapsAddress(item){
		this.navCtrl.push(GoogleMapsPage, {
			data: item
		});
		this.data.google_address = '';
		this.items = [];
	}
	
	isLogin(){
		this.storage.get('id_token').then(id_token => {
			if(id_token != null){
				this.AuthService.islogin(id_token).then(data => {
					this.data.login = data;
					if(this.data.login.error){
						this.events.publish('authLogin:menu', false);
						this.storage.remove('id_token');
					}
					if(this.data.login.login){
						this.events.publish('authLogin:menu', true);
					}
				});
			}
    	});
	}

}
