import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class AuthServiceProvider {
  
  apiUrl = 'http://54.82.37.244/api/app/auth';
  //apiUrl = 'http://127.0.0.1:8000/api/app/auth';
  
  constructor(
    public http: HttpClient, 
    public storage: Storage,
  ){}

  getTypeDocuments(){
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'/document-types').subscribe(data => {
        resolve(data);
      }, (err) => {
        reject(err);
      });
    });
  }

  register(user: {}) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/register', user, {
        headers: new HttpHeaders().append('Accept', 'application/json')
      })
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          resolve(err);
        });
    });
  }

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/login', { 'email': email, 'password': password }, {
        headers: new HttpHeaders().append('Accept', 'application/json')
      })
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          resolve(err);
        });
    });
  }

  password(email: string) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/password', { 'email': email}, {
        headers: new HttpHeaders().append('Accept', 'application/json')
      })
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          resolve(err);
        });
    });
  }

  islogin(id_token) {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'/islogin?token='+id_token)
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          resolve(err);
        });
    });
  }

  getAccount(token){
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'/account?token='+token).subscribe(data => {
        resolve(data);
      }, (err) => {
        reject(err);
      });
    });
  }

  endeavor(email: string, nidoo_id: string) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/endeavor', { 'email': email, 'nidoo_id': nidoo_id }, {
        headers: new HttpHeaders().append('Accept', 'application/json')
      })
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          resolve(err);
        });
    });
  }
      
}
