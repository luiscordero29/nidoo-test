import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class NidooServiceProvider {
  
  apiUrl = 'http://54.82.37.244/api/app/nidoos';
  //apiUrl = 'http://127.0.0.1:8000/api/app/nidoos';
  
  constructor(
    public http: HttpClient
  ){}

  nidoos() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/index').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  nidoosType(nidooType) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/type/'+nidooType).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  alliance() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/alliance').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  allianceType(nidooType) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/alliancetype/'+nidooType).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  searchAddress(address) {
    return new Promise(resolve => {
      this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=AIzaSyCiwjZlnpoWv_EqO-czlw6pK8UYExZuvFw').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
