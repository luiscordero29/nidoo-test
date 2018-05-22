import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, AlertController, LoadingController, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { NidooServiceProvider } from '../../providers/nidoo-service/nidoo-service';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { NidooPage } from '../nidoo/nidoo';

@IonicPage()
@Component({
  selector: 'page-google-maps',
  templateUrl: 'google-maps.html',
})
export class GoogleMapsPage {
  
  public data:any = {};
	public items: string[];  
  public MapZoom: number;
  public MapCenter: Object;
  public positionsAddress: any;
  public IfFooter: boolean = false;
  public FooterNidoos: any;
  public ShowNidoos: any;
  public formatted_address: string;
  public dataAddress: any;
  public dataNidoos: any;
  @ViewChild(Slides) slidesNidoos: Slides;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public NidooService: NidooServiceProvider,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public storage: Storage,
    public AuthService: AuthServiceProvider,
  ){
    this.formatted_address = navParams.get('data');
    this.positionsAddress = [];
    this.FooterNidoos = [];
    this.ShowNidoos = [];
    this.data = {
      google_address: '',
      typeVehicle: {
        car: true,
        bicycle: true,
        motorcycle: true,
      },
      filter: 'all',
      isLogin: false,
		};
  }

  ionViewDidLoad() {
    /*
    * Loading
    */
    let loading = this.loadingCtrl.create({
      content: 'Cargando Nidoos...'
    });
    loading.present();
    /*
    * Load Map
    */
    this.initNguiMap();
    /*
    * Loading
    */
    loading.dismiss();
  }

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
			let search = 'Bogotá, ' + address;
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
		this.MapZoom = 16;
    this.MapCenter = item;
    this.data.google_address = '';
		this.items = [];
	}

  showNidoos(nidoos){
    this.showFilter();
    this.slidesNidoos.slideTo(0);
    this.ShowNidoos = nidoos;
    this.IfFooter = true;
  }

  hideNidoos(){
    this.hideFilter();
    this.IfFooter = false;
  }

  viewNidoo(nidoo_id){
    console.log('Id Nidoo: ' + nidoo_id);
    this.navCtrl.push(NidooPage, {
			data: nidoo_id
		});
  }

  showFilter(){
    switch (this.data.filter) {
      case 'all':
        this.data.typeVehicle.bicycle = false;
        this.data.typeVehicle.motorcycle = false;
        this.data.typeVehicle.car = false;
        break;
      case 'car':
        this.data.typeVehicle.car = false;
        break;
      case 'motorcycle':
        this.data.typeVehicle.motorcycle = false;
        break;
      case 'bicycle':
        this.data.typeVehicle.bicycle = false;
        break;
    }
  }

  hideFilter(){
    switch (this.data.filter) {
      case 'all':
        this.data.typeVehicle.bicycle = true;
        this.data.typeVehicle.motorcycle = true;
        this.data.typeVehicle.car = true;
        break;
      case 'car':
        this.data.typeVehicle.car = true;
        break;
      case 'motorcycle':
        this.data.typeVehicle.motorcycle = true;
        break;
      case 'bicycle':
        this.data.typeVehicle.bicycle = true;
        break;
    }
  }

  filterNidoos(type){
    switch(type){
      case 'car':
        if(this.data.typeVehicle.bicycle && this.data.typeVehicle.motorcycle){
          this.data.typeVehicle.bicycle = false;
          this.data.typeVehicle.motorcycle = false;
          this.data.filter = 'car';
          this.nidoosType('Carro o Camioneta');
        }else{
          this.data.typeVehicle.bicycle = true;
          this.data.typeVehicle.motorcycle = true;
          this.data.filter = 'all';
          this.nidoos();
        }
        break;
      case 'bicycle':
        if(this.data.typeVehicle.car && this.data.typeVehicle.motorcycle){
          this.data.typeVehicle.car = false;
          this.data.typeVehicle.motorcycle = false;
          this.data.filter = 'bicycle';          
          this.nidoosType('Bicicleta');
        }else{
          this.data.typeVehicle.car = true;
          this.data.typeVehicle.motorcycle = true;
          this.data.filter = 'all';
          this.nidoos();
        }
        break;
      case 'motorcycle':
        if(this.data.typeVehicle.bicycle && this.data.typeVehicle.car){
          this.data.typeVehicle.car = false;
          this.data.typeVehicle.bicycle = false;
          this.data.filter = 'motorcycle';
          this.nidoosType('Motocicleta');
        }else{
          this.data.typeVehicle.car = true;
          this.data.typeVehicle.bicycle = true;
          this.data.filter = 'all';
          this.nidoos();
        }
        break;
    }
  }

  nidoosType(nidooType) {
    /*
    * Load Nidoos
    */
    let a; 
    let n;
    let r;
    let Marker;
    let MarkerGroup;
    let Reservations;
    let Address;
    let Nidoos;
    let NidooIcon;
    let Spaces;
    let photo;
    let path;
    let parking;
    this.positionsAddress = [];
    this.NidooService.allianceType(nidooType).then(data => {
      this.dataNidoos = data;
      parking = this.dataNidoos.message.parking; 
      path = this.dataNidoos.message.path; 
      Marker = this.dataNidoos.message.marker; 
      MarkerGroup = this.dataNidoos.message.markergroup; 
      Reservations = this.dataNidoos.message.reservations; 
      Address = this.dataNidoos.message.address; 
      Nidoos = this.dataNidoos.message.nidoos; 
      for (a = 0; a < Address.length; a++) { 
        /*
          Calcular Espacios
        */
        Spaces = 0;
        for(r = 0; r < Reservations.length; r++){
          if(Reservations[r].id == Address[a].id){
            Spaces = Reservations[r].spaces;
          }
        }
        for(n = 0; n < Nidoos.length; n++){
          if(Nidoos[n].id == Address[a].id){
            Spaces = Nidoos[n].spaces - Spaces;
          }
        }
        if(Spaces>0){
          /*
            Info Nidoos
          */
          NidooIcon = Marker;
          /*
          * Push Nidoo
          */
          this.FooterNidoos = [];
          for(n = 0; n < Nidoos.length; n++){
            if(Nidoos[n].address_one == Address[a].address_one){
              let photos = Nidoos[n].nidoo_photo_path;
              photos = photos.split(',');
              if(photos[0].length > 0){
                photo = path + '/' + photos[0];                
              }else{
                photo = parking;
              }
              this.FooterNidoos.push({
                id: Nidoos[n].id,
                type: Nidoos[n].type,
                spaces: Spaces,
                address_one: Nidoos[n].address_one,                
                photo: photo,                
              });
            }
          } 
          /*
            Create Marker
          */
          this.positionsAddress.push({
            nidoos: this.FooterNidoos,
            address: Address[a],
            LatLng: {
              lat: Address[a].latitude,
              lng: Address[a].longitude
            },
            icon: NidooIcon,
          }); 
                
        }
      }
    });
  }

  nidoos() {
    /*
    * Load Nidoos
    */
    let a; 
    let n;
    let r;
    let Marker;
    let MarkerGroup;
    let Reservations;
    let Address;
    let Nidoos;
    let NidooIcon;
    let Spaces;
    let photo;
    let path;
    let parking;
    this.NidooService.alliance().then(data => {
      this.dataNidoos = data;
      parking = this.dataNidoos.message.parking; 
      path = this.dataNidoos.message.path; 
      Marker = this.dataNidoos.message.marker; 
      MarkerGroup = this.dataNidoos.message.markergroup; 
      Reservations = this.dataNidoos.message.reservations; 
      Address = this.dataNidoos.message.address; 
      Nidoos = this.dataNidoos.message.nidoos; 
      for (a = 0; a < Address.length; a++) { 
        /*
          Calcular Espacios
        */
        Spaces = 0;
        for(r = 0; r < Reservations.length; r++){
          if(Reservations[r].id == Address[a].id){
            Spaces = Reservations[r].spaces;
          }
        }
        for(n = 0; n < Nidoos.length; n++){
          if(Nidoos[n].id == Address[a].id){
            Spaces = Nidoos[n].spaces - Spaces;
          }
        }
        if(Spaces>0){
          /*
            Info Nidoos
          */
          NidooIcon = Marker;
          /*
          * Push Nidoo
          */
          this.FooterNidoos = [];
          for(n = 0; n < Nidoos.length; n++){
            if(Nidoos[n].address_one == Address[a].address_one){
              let photos = Nidoos[n].nidoo_photo_path;
              photos = photos.split(',');
              if(photos[0].length > 0){
                photo = path + '/' + photos[0];                
              }else{
                photo = parking;
              }
              this.FooterNidoos.push({
                id: Nidoos[n].id,
                type: Nidoos[n].type,
                spaces: Spaces,
                address_one: Nidoos[n].address_one,                
                photo: photo,                
              });
            }
          } 
          /*
            Create Marker
          */
          this.positionsAddress.push({
            nidoos: this.FooterNidoos,
            address: Address[a],
            LatLng: {
              lat: Address[a].latitude,
              lng: Address[a].longitude
            },
            icon: NidooIcon,
          }); 
                
        }
      }
    });
  }

  initNguiMap() {
    this.MapZoom = 14;
    this.MapCenter = 'Bogotá, Colombia';
    this.nidoos();
  }

}
