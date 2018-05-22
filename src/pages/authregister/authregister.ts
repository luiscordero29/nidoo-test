import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-authregister',
  templateUrl: 'authregister.html',
})
export class AuthregisterPage {
  public fields: any;
  public fieldsVal: any;
  public dataTypeDocuments: any;
  public TypeDocuments: any;
  public IsNIT: boolean;
  public data: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public AuthService: AuthServiceProvider,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
  ){
    this.TypeDocuments = [];
    this.IsNIT = false;
    this.fields = {
      email: '',
      name: '',
      lastname: '',
      document_code: '',
      document_type_id: '',
      document_number: '',
      company: 'Nidoo',
      mobile_phone: '',
      password: '',
    }
    this.fieldsVal = {
      email: '',
      name: '',
      lastname: '',
      document_code: '',
      document_type_id: '',
      document_number: '',
      company: '',
      mobile_phone: '',
      password: '',
    }
  }

  ionViewDidLoad() {
    this.loadTypeDocuments();
  }

  loadTypeDocuments(){
    this.AuthService.getTypeDocuments().then(data => {
      this.dataTypeDocuments = data;
      this.TypeDocuments = this.dataTypeDocuments.message.document_types;
    });
  }

  onSelectChangeTypeDocument(selectedValue: any){
    if (selectedValue != 'nit') {
      this.IsNIT = false;
      this.fields.company = 'Nidoo';
    } else {
      this.IsNIT = true; 
      this.fields.company = '';
    }
  }

  createAccount(){
    let loading = this.loadingCtrl.create({
      content: 'Cargando...'
    });
    loading.present();
    for(let i = 0; i < this.TypeDocuments.length; i++){
      if(this.TypeDocuments[i].code == this.fields.document_code){
        this.fields.document_type_id = this.TypeDocuments[i].id;
      }
    }
    this.AuthService.register(this.fields).then(data => {
      this.data = data;
      if(this.data.status == '400'){
        this.fieldsVal.company = this.data.error.error.message.company;
        this.fieldsVal.document_number = this.data.error.error.message.document_number;
        this.fieldsVal.document_type_id = this.data.error.error.message.document_type_id;
        this.fieldsVal.email = this.data.error.error.message.email;
        this.fieldsVal.lastname = this.data.error.error.message.lastname;
        this.fieldsVal.mobile_phone = this.data.error.error.message.mobile_phone;
        this.fieldsVal.name = this.data.error.error.message.name;
        this.fieldsVal.password = this.data.error.error.message.password;
      }
      if(this.data.status_code == '201'){
        this.fields = {
          email: '',
          name: '',
          lastname: '',
          document_code: '',          
          document_type_id: '',
          document_number: '',
          company: 'Nidoo',
          mobile_phone: '',
          password: '',
        }
        this.fieldsVal = {
          email: '',
          name: '',
          lastname: '',
          document_code: '',
          document_type_id: '',
          document_number: '',
          company: '',
          mobile_phone: '',
          password: '',
        }
        let alert = this.alertCtrl.create({
          title: '',
          subTitle: 'Cuenta creada!',
          buttons: ['OK']
        });
        this.IsNIT = false;
        alert.present();
      }
    });
    loading.dismiss();
  }
}
