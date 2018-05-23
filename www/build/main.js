webpackJsonp([12],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NidooPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_thank_you_thank_you__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NidooPage = /** @class */ (function () {
    function NidooPage(navCtrl, navParams, loadingCtrl, alertCtrl, AuthService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.AuthService = AuthService;
        this.nidoo_id = navParams.get('data');
        this.fields = {
            email: '',
        };
        this.fieldsVal = {
            email: '',
        };
    }
    NidooPage.prototype.ionViewDidLoad = function () { };
    NidooPage.prototype.applyNidoo = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Cargando...'
        });
        loading.present();
        console.log(this.fields.email + this.nidoo_id);
        this.AuthService.endeavor(this.fields.email, this.nidoo_id).then(function (data) {
            _this.data = data;
            if (_this.data.error) {
                _this.fieldsVal.email = _this.data.error.error.message.email;
            }
            if (_this.data.status_code == '201') {
                _this.fieldsVal.email = '';
                _this.fields.email = '';
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_thank_you_thank_you__["a" /* ThankYouPage */]);
            }
        });
        loading.dismiss();
    };
    NidooPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nidoo',template:/*ion-inline-start:"/home/luiscordero29/Projects/nidoo/nidoo-test/src/pages/nidoo/nidoo.html"*/'<ion-content padding>\n    \n  <ion-grid class="content-title">\n    <ion-row>\n      <ion-col col-12>\n        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>\n      </ion-col>\n      <ion-col col-12>\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam esse asperiores eos aspernatur ea blanditiis eligendi repellat architecto voluptas doloribus ducimus pariatur laboriosam quod, illo delectus rerum voluptates culpa vitae.\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n      \n  <ion-list class="content-list">\n    <ion-item>\n      <ion-label><ion-icon name="at"></ion-icon></ion-label>\n      <ion-input [(ngModel)]="fields.email" name="email" type="email" placeholder="Dirección de correo electrónico"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="fieldsVal.email" text-wrap class="errors">\n      {{fieldsVal.email}}\n    </ion-item>\n    <button ion-item class="btn-ion-item"></button>\n  </ion-list>\n      \n  <ion-grid>\n    <ion-row>\n      <ion-col col-4 offset-4>\n        <button (click)="applyNidoo()"  ion-button full class="btn-authlogin">SOLICITAR</button>      \n      </ion-col>            \n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/home/luiscordero29/Projects/nidoo/nidoo-test/src/pages/nidoo/nidoo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], NidooPage);
    return NidooPage;
}());

//# sourceMappingURL=nidoo.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThankYouPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ThankYouPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ThankYouPage = /** @class */ (function () {
    function ThankYouPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ThankYouPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ThankYouPage');
    };
    ThankYouPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-thank-you',template:/*ion-inline-start:"/home/luiscordero29/Projects/nidoo/nidoo-test/src/pages/thank-you/thank-you.html"*/'<ion-content padding>\n  <ion-grid class="content-title">\n    <ion-row>\n      <ion-col col-12>\n        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>\n      </ion-col>\n      <ion-col col-12>\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam esse asperiores eos aspernatur ea blanditiis eligendi repellat architecto voluptas doloribus ducimus pariatur laboriosam quod, illo delectus rerum voluptates culpa vitae.\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/luiscordero29/Projects/nidoo/nidoo-test/src/pages/thank-you/thank-you.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ThankYouPage);
    return ThankYouPage;
}());

//# sourceMappingURL=thank-you.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_auth_auth__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FavoritesPage = /** @class */ (function () {
    function FavoritesPage(navCtrl, navParams, storage, AuthService, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.AuthService = AuthService;
        this.events = events;
        this.data = {};
    }
    FavoritesPage.prototype.ionViewCanEnter = function () {
        var _this = this;
        this.storage.get('id_token').then(function (id_token) {
            if (id_token === null) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_auth_auth__["a" /* AuthPage */]);
                return false;
            }
            else {
                _this.AuthService.islogin(id_token).then(function (data) {
                    _this.data.login = data;
                    if (_this.data.login.error) {
                        _this.events.publish('authLogin:menu', false);
                        _this.storage.remove('id_token');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_auth_auth__["a" /* AuthPage */]);
                    }
                    if (_this.data.login.login) {
                        _this.events.publish('authLogin:menu', true);
                    }
                });
            }
        });
    };
    FavoritesPage.prototype.ionViewDidLoad = function () { };
    FavoritesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favorites',template:/*ion-inline-start:"/home/luiscordero29/Projects/nidoo/nidoo-test/src/pages/favorites/favorites.html"*/'<ion-content padding>\n  \n  <ion-fab left top class="main-menu">\n    <button ion-fab menuToggle><ion-icon name="menu"></ion-icon></button>\n  </ion-fab>\n\n  <ion-grid class="content-title">\n    <ion-row>\n      <ion-col col-12>\n        <h1>MIS NIDOOS FAVORITOS</h1>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div class="alert">\n    Disculpe, esta sección se encuentra en construcción.\n  </div>\n\n</ion-content>'/*ion-inline-end:"/home/luiscordero29/Projects/nidoo/nidoo-test/src/pages/favorites/favorites.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], FavoritesPage);
    return FavoritesPage;
}());

//# sourceMappingURL=favorites.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_auth_auth__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReservationsPage = /** @class */ (function () {
    function ReservationsPage(navCtrl, navParams, AuthService, storage, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.AuthService = AuthService;
        this.storage = storage;
        this.events = events;
        this.data = {};
    }
    ReservationsPage.prototype.ionViewCanEnter = function () {
        var _this = this;
        this.storage.get('id_token').then(function (id_token) {
            if (id_token === null) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_auth_auth__["a" /* AuthPage */]);
                return false;
            }
            else {
                _this.AuthService.islogin(id_token).then(function (data) {
                    _this.data.login = data;
                    if (_this.data.login.error) {
                        _this.events.publish('authLogin:menu', false);
                        _this.storage.remove('id_token');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_auth_auth__["a" /* AuthPage */]);
                    }
                    if (_this.data.login.login) {
                        _this.events.publish('authLogin:menu', true);
                    }
                });
            }
        });
    };
    ReservationsPage.prototype.ionViewDidLoad = function () { };
    ReservationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reservations',template:/*ion-inline-start:"/home/luiscordero29/Projects/nidoo/nidoo-test/src/pages/reservations/reservations.html"*/'<ion-content padding>\n  \n  <ion-fab left top class="main-menu">\n    <button ion-fab menuToggle><ion-icon name="menu"></ion-icon></button>\n  </ion-fab>\n  \n  <ion-grid class="content-title">\n    <ion-row>\n      <ion-col col-12>\n        <h1>MIS RESERVAS</h1>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div class="alert">\n    Disculpe, esta sección se encuentra en construcción.\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/luiscordero29/Projects/nidoo/nidoo-test/src/pages/reservations/reservations.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], ReservationsPage);
    return ReservationsPage;
}());

//# sourceMappingURL=reservations.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NidoosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_auth_auth__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NidoosPage = /** @class */ (function () {
    function NidoosPage(navCtrl, navParams, AuthService, storage, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.AuthService = AuthService;
        this.storage = storage;
        this.events = events;
        this.data = {};
    }
    NidoosPage.prototype.ionViewCanEnter = function () {
        var _this = this;
        this.storage.get('id_token').then(function (id_token) {
            if (id_token === null) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_auth_auth__["a" /* AuthPage */]);
                return false;
            }
            else {
                _this.AuthService.islogin(id_token).then(function (data) {
                    _this.data.login = data;
                    if (_this.data.login.error) {
                        _this.events.publish('authLogin:menu', false);
                        _this.storage.remove('id_token');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_auth_auth__["a" /* AuthPage */]);
                    }
                    if (_this.data.login.login) {
                        _this.events.publish('authLogin:menu', true);
                    }
                });
            }
        });
    };
    NidoosPage.prototype.ionViewDidLoad = function () { };
    NidoosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nidoos',template:/*ion-inline-start:"/home/luiscordero29/Projects/nidoo/nidoo-test/src/pages/nidoos/nidoos.html"*/'<ion-content padding>\n  \n  <ion-fab left top class="main-menu">\n    <button ion-fab menuToggle><ion-icon name="menu"></ion-icon></button>\n  </ion-fab>\n  \n  <ion-grid class="content-title">\n    <ion-row>\n      <ion-col col-12>\n        <h1>MIS NIDOOS</h1>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div class="alert">\n    Disculpe, esta sección se encuentra en construcción.\n  </div>\n  \n</ion-content>\n'/*ion-inline-end:"/home/luiscordero29/Projects/nidoo/nidoo-test/src/pages/nidoos/nidoos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], NidoosPage);
    return NidoosPage;
}());

//# sourceMappingURL=nidoos.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthpasswordemailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthpasswordemailPage = /** @class */ (function () {
    function AuthpasswordemailPage(navCtrl, navParams, loadingCtrl, alertCtrl, AuthService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.AuthService = AuthService;
        this.fields = {
            email: '',
        };
        this.fieldsVal = {
            email: '',
        };
    }
    AuthpasswordemailPage.prototype.ionViewDidLoad = function () { };
    AuthpasswordemailPage.prototype.authpasswordemail = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Cargando...'
        });
        loading.present();
        this.AuthService.password(this.fields.email).then(function (data) {
            _this.data = data;
            console.log(data);
            if (_this.data.status) {
                _this.fieldsVal.email = _this.data.error.error.message.email;
            }
            if (_this.data.status_code) {
                _this.fieldsVal = {
                    email: '',
                };
                _this.fields = {
                    email: '',
                };
                var alert_1 = _this.alertCtrl.create({
                    title: '',
                    subTitle: 'Correo enviado!',
                    buttons: ['OK']
                });
                alert_1.present();
            }
        });
        loading.dismiss();
    };
    AuthpasswordemailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-authpasswordemail',template:/*ion-inline-start:"/home/luiscordero29/Projects/nidoo/nidoo-test/src/pages/authpasswordemail/authpasswordemail.html"*/'<ion-content padding>\n  \n  <ion-fab left top class="main-menu">\n    <button ion-fab menuToggle><ion-icon name="menu"></ion-icon></button>\n  </ion-fab>\n\n  <ion-grid class="content-title">\n    <ion-row>\n      <ion-col col-12>\n        <h1>OLVIDÉ MI CONTRASEÑA</h1>\n      </ion-col>\n      <ion-col col-12>\n        Escribe el correo electrónico asociado a tu cuenta y te enviaremos un correo. \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-list class="content-list">\n    <ion-item>\n      <ion-label><ion-icon name="at"></ion-icon></ion-label>\n      <ion-input [(ngModel)]="fields.email" name="email" type="email" placeholder="Dirección de correo electrónico"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="fieldsVal.email" text-wrap class="errors">\n      {{fieldsVal.email}}\n    </ion-item>\n    <button ion-item class="btn-ion-item"></button>\n  </ion-list>\n  \n  <ion-grid>\n    <ion-row>\n      <ion-col col-4 offset-4>\n        <button (click)="authpasswordemail()"  ion-button full class="btn-authpasswordemail">ENVIAR</button>      \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/home/luiscordero29/Projects/nidoo/nidoo-test/src/pages/authpasswordemail/authpasswordemail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], AuthpasswordemailPage);
    return AuthpasswordemailPage;
}());

//# sourceMappingURL=authpasswordemail.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthaccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_auth_auth__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthaccountPage = /** @class */ (function () {
    function AuthaccountPage(navCtrl, navParams, storage, AuthService, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.AuthService = AuthService;
        this.events = events;
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
        };
    }
    AuthaccountPage.prototype.ionViewCanEnter = function () {
        var _this = this;
        this.storage.get('id_token').then(function (id_token) {
            if (id_token === null) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_auth_auth__["a" /* AuthPage */]);
                return false;
            }
            else {
                _this.AuthService.islogin(id_token).then(function (data) {
                    _this.data.login = data;
                    if (_this.data.login.error) {
                        _this.events.publish('authLogin:menu', false);
                        _this.storage.remove('id_token');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_auth_auth__["a" /* AuthPage */]);
                    }
                    if (_this.data.login.login) {
                        _this.events.publish('authLogin:menu', true);
                    }
                });
            }
        });
        this.loadAccount();
    };
    AuthaccountPage.prototype.ionViewDidLoad = function () { };
    AuthaccountPage.prototype.loadAccount = function () {
        var _this = this;
        this.storage.get('id_token').then(function (id_token) {
            _this.AuthService.getAccount(id_token).then(function (data) {
                _this.data = data;
                _this.user = {
                    name: _this.data.message.user.name,
                    lastname: _this.data.message.user.lastname,
                    company: _this.data.message.user.company,
                    document_number: _this.data.message.user.document_number,
                    email: _this.data.message.user.email,
                    phone: _this.data.message.user.phone,
                    mobile_phone: _this.data.message.user.mobile_phone,
                    document_type_code: _this.data.message.user.document_type_code,
                    document_type_name: _this.data.message.user.document_type_name,
                };
                if (_this.user.document_type_code != 'nit') {
                    _this.user.iscompany = false;
                }
                else {
                    _this.user.iscompany = true;
                }
            });
        });
    };
    AuthaccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-authaccount',template:/*ion-inline-start:"/home/luiscordero29/Projects/nidoo/nidoo-test/src/pages/authaccount/authaccount.html"*/'<ion-content padding>\n  \n  <ion-fab left top class="main-menu">\n    <button ion-fab menuToggle><ion-icon name="menu"></ion-icon></button>\n  </ion-fab>\n  \n  <ion-grid class="content-title">\n    <ion-row>\n      <ion-col col-12>\n        <h1>MI CUENTA</h1>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-list>\n      <ion-item-group>\n        <ion-item-divider color="light">Datos Personales</ion-item-divider>\n        <ion-item>Tipo de Documento: {{user.document_type_name}}</ion-item>\n        <ion-item>Número de Documento: {{user.document_number}}</ion-item>\n        <ion-item>Apellidos: {{user.lastname}}</ion-item>\n        <ion-item>Nombres: {{user.name}}</ion-item>\n      </ion-item-group>\n      <ion-item-group>\n        <ion-item-divider color="light">Datos de Contacto</ion-item-divider>\n        <ion-item>Email: {{user.email}}</ion-item>\n        <ion-item>Teléfono: {{user.phone}}</ion-item>\n        <ion-item>Teléfono móvil: {{user.mobile_phone}}</ion-item>\n      </ion-item-group>\n      <ion-item-group *ngIf="user.iscompany">\n        <ion-item-divider color="light">Empresa</ion-item-divider>\n        <ion-item>{{user.company}}</ion-item>\n      </ion-item-group>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/luiscordero29/Projects/nidoo/nidoo-test/src/pages/authaccount/authaccount.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], AuthaccountPage);
    return AuthaccountPage;
}());

//# sourceMappingURL=authaccount.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashScreenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SplashScreenPage = /** @class */ (function () {
    function SplashScreenPage(viewCtrl, splashScreen, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.splashScreen = splashScreen;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SplashScreenPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.splashScreen.hide();
        setTimeout(function () {
            _this.viewCtrl.dismiss();
        }, 1000);
    };
    SplashScreenPage.prototype.ionViewDidLoad = function () { };
    SplashScreenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-splash-screen',template:/*ion-inline-start:"/home/luiscordero29/Projects/nidoo/nidoo-test/src/pages/splash-screen/splash-screen.html"*/'<ion-content padding id="nidoo-splash-screen">\n</ion-content>'/*ion-inline-end:"/home/luiscordero29/Projects/nidoo/nidoo-test/src/pages/splash-screen/splash-screen.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], SplashScreenPage);
    return SplashScreenPage;
}());

//# sourceMappingURL=splash-screen.js.map

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthServiceProvider = /** @class */ (function () {
    //apiUrl = 'http://127.0.0.1:8000/api/app/auth';
    function AuthServiceProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        this.apiUrl = 'http://54.82.37.244/api/app/auth';
    }
    AuthServiceProvider.prototype.getTypeDocuments = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.apiUrl + '/document-types').subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthServiceProvider.prototype.register = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/register', user, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().append('Accept', 'application/json')
            })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                resolve(err);
            });
        });
    };
    AuthServiceProvider.prototype.login = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/login', { 'email': email, 'password': password }, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().append('Accept', 'application/json')
            })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                resolve(err);
            });
        });
    };
    AuthServiceProvider.prototype.password = function (email) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/password', { 'email': email }, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().append('Accept', 'application/json')
            })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                resolve(err);
            });
        });
    };
    AuthServiceProvider.prototype.islogin = function (id_token) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.apiUrl + '/islogin?token=' + id_token)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                resolve(err);
            });
        });
    };
    AuthServiceProvider.prototype.getAccount = function (token) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.apiUrl + '/account?token=' + token).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthServiceProvider.prototype.endeavor = function (email, nidoo_id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/endeavor', { 'email': email, 'nidoo_id': nidoo_id }, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().append('Accept', 'application/json')
            })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                resolve(err);
            });
        });
    };
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], AuthServiceProvider);
    return AuthServiceProvider;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 133:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 133;

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/auth/auth.module": [
		320,
		11
	],
	"../pages/authaccount/authaccount.module": [
		321,
		10
	],
	"../pages/authlogin/authlogin.module": [
		322,
		9
	],
	"../pages/authpasswordemail/authpasswordemail.module": [
		323,
		8
	],
	"../pages/authregister/authregister.module": [
		324,
		7
	],
	"../pages/favorites/favorites.module": [
		325,
		6
	],
	"../pages/google-maps/google-maps.module": [
		326,
		5
	],
	"../pages/nidoo/nidoo.module": [
		328,
		4
	],
	"../pages/nidoos/nidoos.module": [
		331,
		3
	],
	"../pages/reservations/reservations.module": [
		327,
		2
	],
	"../pages/splash-screen/splash-screen.module": [
		330,
		1
	],
	"../pages/thank-you/thank-you.module": [
		329,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 175;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__google_maps_google_maps__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_nidoo_service_nidoo_service__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, alertCtrl, AuthService, NidooService, storage, events, geolocation) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.AuthService = AuthService;
        this.NidooService = NidooService;
        this.storage = storage;
        this.events = events;
        this.geolocation = geolocation;
        this.data = {
            google_address: ''
        };
    }
    HomePage.prototype.ionViewCanEnter = function () {
        this.isLogin();
        /*
        this.geolocation.getCurrentPosition().then(pos => {
            console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
        });
        */
    };
    HomePage.prototype.ionViewDidLoad = function () { };
    HomePage.prototype.getItems = function (ev) {
        var _this = this;
        this.items = [];
        /*
        *	set address
        */
        var address = ev.target.value;
        /*
        * search address on google maps
        */
        if (address.length > 0) {
            var search = 'Colombia, ' + address;
            this.NidooService.searchAddress(search).then(function (data) {
                _this.data.address = data;
                if (_this.data.address.status != 'OK') {
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Error',
                        subTitle: 'Ingrese una dirección valida!',
                        buttons: ['OK']
                    });
                    alert_1.present();
                    _this.data.google_address = '';
                    _this.items = [];
                }
                else {
                    for (var i = 0; i < _this.data.address.results.length; i++) {
                        var elements = _this.data.address.results[i].address_components;
                        var element = '';
                        for (var i_1 = 0; i_1 < elements.length; i_1++) {
                            if (elements[i_1].types[0] == 'route') {
                                if (elements[i_1].long_name) {
                                    element = elements[i_1].long_name;
                                }
                            }
                            if (elements[i_1].types[0] == 'locality') {
                                if (elements[i_1].long_name) {
                                    if (element.length > 0) {
                                        element = element + ', ' + elements[i_1].long_name;
                                    }
                                    else {
                                        element = elements[i_1].long_name;
                                    }
                                }
                            }
                            if (elements[i_1].types[0] == 'country') {
                                if (elements[i_1].long_name) {
                                    if (element.length > 0) {
                                        element = element + ', ' + elements[i_1].long_name;
                                    }
                                    else {
                                        element = elements[i_1].long_name;
                                    }
                                }
                            }
                        }
                        _this.items.push(element);
                    }
                }
            });
        }
        /*
        *	filtrar direccion
        */
        if (address && address.trim() != '') {
            if (this.items.length > 0) {
                this.items = this.items.filter(function (item) {
                    return (item.toLowerCase().indexOf(address.toLowerCase()) > -1);
                });
            }
        }
    };
    HomePage.prototype.goGoogleMapsAddress = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__google_maps_google_maps__["a" /* GoogleMapsPage */], {
            data: item
        });
        this.data.google_address = '';
        this.items = [];
    };
    HomePage.prototype.isLogin = function () {
        var _this = this;
        this.storage.get('id_token').then(function (id_token) {
            if (id_token != null) {
                _this.AuthService.islogin(id_token).then(function (data) {
                    _this.data.login = data;
                    if (_this.data.login.error) {
                        _this.events.publish('authLogin:menu', false);
                        _this.storage.remove('id_token');
                    }
                    if (_this.data.login.login) {
                        _this.events.publish('authLogin:menu', true);
                    }
                });
            }
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/luiscordero29/Projects/nidoo/nidoo-test/src/pages/home/home.html"*/'<ion-content padding id="nidoo-home">\n  \n  <ion-fab left top class="main-menu">\n    <button ion-fab menuToggle><ion-icon name="menu"></ion-icon></button>\n  </ion-fab>\n  \n  <ion-searchbar [(ngModel)]="data.google_address" (ionInput)="getItems($event)" class="main-search" placeholder="¿Dónde quieres parquear?"></ion-searchbar>\n  <ion-list class="items">\n    <ion-item *ngFor="let item of items" (click)="goGoogleMapsAddress(item)">\n      <ion-icon name="ios-locate-outline"></ion-icon> {{ item }}\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/luiscordero29/Projects/nidoo/nidoo-test/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_nidoo_service_nidoo_service__["a" /* NidooServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__["a" /* Geolocation */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(245);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngui_map__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_image_loader__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_splash_screen_splash_screen__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_home_home__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_favorites_favorites__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_reservations_reservations__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_nidoos_nidoos__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_google_maps_google_maps__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_auth_auth__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_authlogin_authlogin__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_authregister_authregister__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_authaccount_authaccount__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_authpasswordemail_authpasswordemail__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_nidoo_nidoo__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_thank_you_thank_you__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_nidoo_service_nidoo_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_auth_service_auth_service__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












/*
  Custom Page
*/
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_splash_screen_splash_screen__["a" /* SplashScreenPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_favorites_favorites__["a" /* FavoritesPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_reservations_reservations__["a" /* ReservationsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_nidoos_nidoos__["a" /* NidoosPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_google_maps_google_maps__["a" /* GoogleMapsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_auth_auth__["a" /* AuthPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_authlogin_authlogin__["a" /* AuthloginPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_authregister_authregister__["a" /* AuthregisterPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_authaccount_authaccount__["a" /* AuthaccountPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_authpasswordemail_authpasswordemail__["a" /* AuthpasswordemailPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_nidoo_nidoo__["a" /* NidooPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_thank_you_thank_you__["a" /* ThankYouPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__ngui_map__["a" /* NguiMapModule */].forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyCiwjZlnpoWv_EqO-czlw6pK8UYExZuvFw' }),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/auth/auth.module#AuthPageModule', name: 'AuthPage', segment: 'auth', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/authaccount/authaccount.module#AuthaccountPageModule', name: 'AuthaccountPage', segment: 'authaccount', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/authlogin/authlogin.module#AuthloginPageModule', name: 'AuthloginPage', segment: 'authlogin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/authpasswordemail/authpasswordemail.module#AuthpasswordemailPageModule', name: 'AuthpasswordemailPage', segment: 'authpasswordemail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/authregister/authregister.module#AuthregisterPageModule', name: 'AuthregisterPage', segment: 'authregister', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favorites/favorites.module#FavoritesPageModule', name: 'FavoritesPage', segment: 'favorites', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/google-maps/google-maps.module#GoogleMapsPageModule', name: 'GoogleMapsPage', segment: 'google-maps', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reservations/reservations.module#ReservationsPageModule', name: 'ReservationsPage', segment: 'reservations', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nidoo/nidoo.module#NidooPageModule', name: 'NidooPage', segment: 'nidoo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/thank-you/thank-you.module#ThankYouPageModule', name: 'ThankYouPage', segment: 'thank-you', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/splash-screen/splash-screen.module#SplashScreenPageModule', name: 'SplashScreenPage', segment: 'splash-screen', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nidoos/nidoos.module#NidoosPageModule', name: 'NidoosPage', segment: 'nidoos', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6_ionic_image_loader__["a" /* IonicImageLoader */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_splash_screen_splash_screen__["a" /* SplashScreenPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_favorites_favorites__["a" /* FavoritesPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_reservations_reservations__["a" /* ReservationsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_nidoos_nidoos__["a" /* NidoosPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_google_maps_google_maps__["a" /* GoogleMapsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_auth_auth__["a" /* AuthPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_authlogin_authlogin__["a" /* AuthloginPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_authregister_authregister__["a" /* AuthregisterPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_authaccount_authaccount__["a" /* AuthaccountPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_authpasswordemail_authpasswordemail__["a" /* AuthpasswordemailPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_nidoo_nidoo__["a" /* NidooPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_thank_you_thank_you__["a" /* ThankYouPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__["a" /* GoogleMaps */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_26__providers_nidoo_service_nidoo_service__["a" /* NidooServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__["a" /* Geolocation */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_google_maps_google_maps__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_splash_screen_splash_screen__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_authlogin_authlogin__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_authaccount_authaccount__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_authregister_authregister__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, modalCtrl, menuCtrl, storage, events) {
        var _this = this;
        this.menuCtrl = menuCtrl;
        this.storage = storage;
        this.events = events;
        //rootPage:any = TabsPage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_google_maps_google_maps__["a" /* GoogleMapsPage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            var splash = modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__pages_splash_screen_splash_screen__["a" /* SplashScreenPage */]);
            splash.present();
        });
        this.isLogin = false;
        events.subscribe('authLogin:menu', function (login) {
            _this.isLogin = login;
        });
    }
    MyApp.prototype.menu = function () {
        var _this = this;
        this.storage.get('id_token').then(function (id_token) {
            if (id_token === null) {
                _this.isLogin = false;
            }
            else {
                _this.isLogin = true;
            }
        });
    };
    MyApp.prototype.menuOpened = function () {
        this.menu();
    };
    MyApp.prototype.menuClosed = function () {
        this.menu();
    };
    MyApp.prototype.goHome = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */]);
        this.menuCtrl.close();
    };
    MyApp.prototype.goAuthlogin = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__pages_authlogin_authlogin__["a" /* AuthloginPage */]);
        this.menuCtrl.close();
    };
    MyApp.prototype.goAuthlogout = function () {
        this.storage.remove("id_token");
        this.isLogin = false;
        this.menuCtrl.close();
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */]);
    };
    MyApp.prototype.goAuthaccount = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__pages_authaccount_authaccount__["a" /* AuthaccountPage */]);
        this.menuCtrl.close();
    };
    MyApp.prototype.goAuthregister = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_9__pages_authregister_authregister__["a" /* AuthregisterPage */]);
        this.menuCtrl.close();
    };
    MyApp.prototype.goSite = function () {
        this.menuCtrl.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myNav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/luiscordero29/Projects/nidoo/nidoo-test/src/app/app.html"*/'<ion-menu [content]="content" id="nidoo-app" (ionOpen)="menuOpened()" (ionClose)="menuClosed()">\n  <ion-content>\n    <ion-list class="main-menu-ion-list">\n      <ion-list-header class="main-menu-list-header">\n      </ion-list-header>\n      <button (click)="goHome()" class="main-menu-ion-item" ion-item icon-left>\n        <ion-icon ios="ios-home-outline" name="home"></ion-icon> BUSCA TU NIDOO\n      </button>\n      <button *ngIf="isLogin" (click)="goAuthaccount()" class="main-menu-ion-item" ion-item icon-left>\n        <ion-icon ios="ios-home-outline" name="person"></ion-icon> MI CUENTA\n      </button>\n      <button *ngIf="isLogin" (click)="goAuthlogout()" class="main-menu-ion-item" ion-item icon-left>\n        <ion-icon ios="ios-home-outline" name="log-out"></ion-icon> CERRAR SESIÓN\n      </button>\n      <button *ngIf="!isLogin" (click)="goAuthlogin()" class="main-menu-ion-item" ion-item icon-left>\n        <ion-icon ios="ios-home-outline" name="person"></ion-icon> INICIAR SESIÓN\n      </button>\n      <button *ngIf="!isLogin" (click)="goAuthregister()" class="main-menu-ion-item" ion-item icon-left>\n        <ion-icon ios="ios-home-outline" name="person-add"></ion-icon> REGISTRARSE\n      </button>     \n      <a (click)="goSite()" class="main-menu-ion-item" ion-item href="https://nidoo.com.co" icon-left>\n        <ion-icon ios="ios-home-outline" name="link"></ion-icon> NIDOO.COM.CO\n      </a>\n    </ion-list>                     \n  </ion-content>\n</ion-menu>\n<ion-nav #myNav [root]="rootPage" #content></ion-nav>'/*ion-inline-end:"/home/luiscordero29/Projects/nidoo/nidoo-test/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_authregister_authregister__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_authlogin_authlogin__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthPage = /** @class */ (function () {
    function AuthPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    AuthPage.prototype.ionViewDidLoad = function () { };
    AuthPage.prototype.goAuthregister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_authregister_authregister__["a" /* AuthregisterPage */]);
    };
    AuthPage.prototype.goAuthlogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_authlogin_authlogin__["a" /* AuthloginPage */]);
    };
    AuthPage.prototype.goAuthfacebook = function () {
        var alert = this.alertCtrl.create({
            title: 'Disculpe',
            subTitle: 'Opción no disponible!',
            buttons: ['OK']
        });
        alert.present();
    };
    AuthPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-auth',template:/*ion-inline-start:"/home/luiscordero29/Projects/nidoo/nidoo-test/src/pages/auth/auth.html"*/'<ion-content padding>\n  <ion-fab left top class="main-menu">\n    <button ion-fab menuToggle><ion-icon name="menu"></ion-icon></button>\n  </ion-fab>\n  <div class="logo"></div>\n  <ion-grid class="menu">\n    <ion-row>\n      <ion-col col-12>\n        <button (click)="goAuthfacebook()" ion-button full icon-left class="btn-facebook">\n          <ion-icon name="logo-facebook"></ion-icon> CONTINUAR CON FACEBOOK\n        </button>\n      </ion-col>\n      <ion-col col-12>\n        <button (click)="goAuthregister()" ion-button full class="btn-authregister">CREAR UNA CUENTA</button>\n      </ion-col>\n      <ion-col>\n        <button (click)="goAuthlogin()" ion-button full outline small class="btn-authlogin">Iniciar Sesión</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/home/luiscordero29/Projects/nidoo/nidoo-test/src/pages/auth/auth.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AuthPage);
    return AuthPage;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthregisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthregisterPage = /** @class */ (function () {
    function AuthregisterPage(navCtrl, navParams, AuthService, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.AuthService = AuthService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
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
        };
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
        };
    }
    AuthregisterPage.prototype.ionViewDidLoad = function () {
        this.loadTypeDocuments();
    };
    AuthregisterPage.prototype.loadTypeDocuments = function () {
        var _this = this;
        this.AuthService.getTypeDocuments().then(function (data) {
            _this.dataTypeDocuments = data;
            _this.TypeDocuments = _this.dataTypeDocuments.message.document_types;
        });
    };
    AuthregisterPage.prototype.onSelectChangeTypeDocument = function (selectedValue) {
        if (selectedValue != 'nit') {
            this.IsNIT = false;
            this.fields.company = 'Nidoo';
        }
        else {
            this.IsNIT = true;
            this.fields.company = '';
        }
    };
    AuthregisterPage.prototype.createAccount = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Cargando...'
        });
        loading.present();
        for (var i = 0; i < this.TypeDocuments.length; i++) {
            if (this.TypeDocuments[i].code == this.fields.document_code) {
                this.fields.document_type_id = this.TypeDocuments[i].id;
            }
        }
        this.AuthService.register(this.fields).then(function (data) {
            _this.data = data;
            if (_this.data.status == '400') {
                _this.fieldsVal.company = _this.data.error.error.message.company;
                _this.fieldsVal.document_number = _this.data.error.error.message.document_number;
                _this.fieldsVal.document_type_id = _this.data.error.error.message.document_type_id;
                _this.fieldsVal.email = _this.data.error.error.message.email;
                _this.fieldsVal.lastname = _this.data.error.error.message.lastname;
                _this.fieldsVal.mobile_phone = _this.data.error.error.message.mobile_phone;
                _this.fieldsVal.name = _this.data.error.error.message.name;
                _this.fieldsVal.password = _this.data.error.error.message.password;
            }
            if (_this.data.status_code == '201') {
                _this.fields = {
                    email: '',
                    name: '',
                    lastname: '',
                    document_code: '',
                    document_type_id: '',
                    document_number: '',
                    company: 'Nidoo',
                    mobile_phone: '',
                    password: '',
                };
                _this.fieldsVal = {
                    email: '',
                    name: '',
                    lastname: '',
                    document_code: '',
                    document_type_id: '',
                    document_number: '',
                    company: '',
                    mobile_phone: '',
                    password: '',
                };
                var alert_1 = _this.alertCtrl.create({
                    title: '',
                    subTitle: 'Cuenta creada!',
                    buttons: ['OK']
                });
                _this.IsNIT = false;
                alert_1.present();
            }
        });
        loading.dismiss();
    };
    AuthregisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-authregister',template:/*ion-inline-start:"/home/luiscordero29/Projects/nidoo/nidoo-test/src/pages/authregister/authregister.html"*/'<ion-content padding>\n  \n  <ion-fab left top class="main-menu">\n    <button ion-fab menuToggle><ion-icon name="menu"></ion-icon></button>\n  </ion-fab>\n      \n  <ion-grid class="content-title">\n    <ion-row>\n      <ion-col col-12>\n        <h1>CREAR UNA CUENTA</h1>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n  <ion-list>\n    <ion-item>\n      <ion-label><ion-icon name="at"></ion-icon></ion-label>\n      <ion-input [(ngModel)]="fields.email" name="email" type="email" placeholder="Dirección de correo electrónico"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="fieldsVal.email" text-wrap class="errors">\n      {{fieldsVal.email}}\n    </ion-item>\n    <ion-item>\n      <ion-label><ion-icon name="person"></ion-icon></ion-label>\n      <ion-input [(ngModel)]="fields.name" name="name" type="text" placeholder="Nombre"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="fieldsVal.name" text-wrap class="errors">\n      {{fieldsVal.name}}\n    </ion-item>\n    <ion-item>\n      <ion-label><ion-icon name="person"></ion-icon></ion-label>\n      <ion-input [(ngModel)]="fields.lastname" name="lastname" type="text" placeholder="Apellido"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="fieldsVal.lastname" text-wrap class="errors">\n      {{fieldsVal.lastname}}\n    </ion-item>\n    <ion-item>\n      <ion-label icon-left><ion-icon name="card"></ion-icon>Tipo de Dodumento</ion-label>\n      <ion-select [(ngModel)]="fields.document_code" (ionChange)="onSelectChangeTypeDocument($event)" name="document_type_id" okText="Seleccionar" cancelText="Volver">\n        <ion-option *ngFor="let TypeDocument of TypeDocuments" [value]="TypeDocument.code">{{TypeDocument.name}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item *ngIf="fieldsVal.document_type_id" text-wrap class="errors">\n      {{fieldsVal.document_type_id}}\n    </ion-item>\n    <ion-item>\n      <ion-label><ion-icon name="card"></ion-icon></ion-label>\n      <ion-input [(ngModel)]="fields.document_number" name="document_number" type="number" placeholder="Número de documento"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="fieldsVal.document_number" text-wrap class="errors">\n      {{fieldsVal.document_number}}\n    </ion-item>\n    <ion-item [hidden]="!IsNIT">\n      <ion-label><ion-icon name="information-circle"></ion-icon></ion-label>\n      <ion-input [(ngModel)]="fields.company" name="company" type="text" placeholder="Empresa"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="fieldsVal.company" text-wrap class="errors">\n      {{fieldsVal.company}}\n    </ion-item>\n    <ion-item>\n      <ion-label><ion-icon name="phone-portrait"></ion-icon></ion-label>\n      <ion-input [(ngModel)]="fields.mobile_phone" name="mobile_phone" type="number" placeholder="Teléfono móvil"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="fieldsVal.mobile_phone" text-wrap class="errors">\n      {{fieldsVal.mobile_phone}}\n    </ion-item>\n    <ion-item>\n      <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n      <ion-input [(ngModel)]="fields.password" name="password" type="password" placeholder="Contraseña"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="fieldsVal.password" text-wrap class="errors">\n      {{fieldsVal.password}}\n    </ion-item>\n    <ion-item text-wrap no-lines class="message">\n      Al registrarme, acepto la Política de Privacidad y los Términos y Condiciones        \n    </ion-item>\n  </ion-list>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6 offset-3>\n        <button (click)="createAccount()" ion-button full class="btn-authregister">CREAR CUENTA</button>        \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/home/luiscordero29/Projects/nidoo/nidoo-test/src/pages/authregister/authregister.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], AuthregisterPage);
    return AuthregisterPage;
}());

//# sourceMappingURL=authregister.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthloginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_authregister_authregister__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_authpasswordemail_authpasswordemail__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthloginPage = /** @class */ (function () {
    function AuthloginPage(navCtrl, navParams, AuthService, events, storage, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.AuthService = AuthService;
        this.events = events;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.fields = {
            email: '',
            password: '',
        };
        this.fieldsVal = {
            email: '',
            password: '',
            login: '',
        };
    }
    AuthloginPage.prototype.ionViewDidLoad = function () { };
    AuthloginPage.prototype.goAuthfacebook = function () {
        var alert = this.alertCtrl.create({
            title: 'Disculpe',
            subTitle: 'Opción no disponible!',
            buttons: ['OK']
        });
        alert.present();
    };
    AuthloginPage.prototype.goAuthRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_authregister_authregister__["a" /* AuthregisterPage */]);
    };
    AuthloginPage.prototype.goAuthPasswordEmail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_authpasswordemail_authpasswordemail__["a" /* AuthpasswordemailPage */]);
    };
    AuthloginPage.prototype.login = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Cargando...'
        });
        loading.present();
        this.AuthService.login(this.fields.email, this.fields.password).then(function (data) {
            _this.data = data;
            if (_this.data.status == '400') {
                _this.fieldsVal.email = _this.data.error.error.message.email;
                _this.fieldsVal.password = _this.data.error.error.message.password;
            }
            if (_this.data.error) {
                _this.fieldsVal.email = '';
                _this.fieldsVal.password = '';
                _this.fieldsVal.login = 'Credenciales Invalidas';
            }
            if (_this.data.token) {
                _this.fieldsVal.email = '';
                _this.fieldsVal.password = '';
                _this.fieldsVal.login = '';
                _this.storage.set('id_token', _this.data.token);
                _this.events.publish('authLogin:menu', true);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */]);
            }
        });
        loading.dismiss();
    };
    AuthloginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-authlogin',template:/*ion-inline-start:"/home/luiscordero29/Projects/nidoo/nidoo-test/src/pages/authlogin/authlogin.html"*/'<ion-content padding>\n  \n  <ion-fab left top class="main-menu">\n    <button ion-fab menuToggle><ion-icon name="menu"></ion-icon></button>\n  </ion-fab>\n  \n  <ion-grid class="content-title">\n    <ion-row>\n      <ion-col col-12>\n        <h1>INICIAR SESIÓN</h1>\n      </ion-col>\n      <ion-col col-12>\n        <button (click)="goAuthfacebook()" ion-button full icon-left class="btn-facebook">\n          <ion-icon name="logo-facebook"></ion-icon> CONTINUAR CON FACEBOOK\n        </button>\n      </ion-col>\n      <ion-col col-12>\n        <div class="divider">\n          <div class="circle"></div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n  <ion-list class="content-list">\n    <ion-item *ngIf="fieldsVal.login" text-wrap class="errors">\n      {{fieldsVal.login}}\n    </ion-item>\n    <ion-item>\n      <ion-label><ion-icon name="at"></ion-icon></ion-label>\n      <ion-input [(ngModel)]="fields.email" name="email" type="email" placeholder="Dirección de correo electrónico"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="fieldsVal.email" text-wrap class="errors">\n      {{fieldsVal.email}}\n    </ion-item>\n    <ion-item>\n      <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n      <ion-input [(ngModel)]="fields.password" name="password" type="password" placeholder="Contraseña"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="fieldsVal.password" text-wrap class="errors">\n      {{fieldsVal.password}}\n    </ion-item>\n    <button ion-item class="btn-ion-item"></button>\n  </ion-list>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-4 offset-4>\n        <button (click)="login()"  ion-button full class="btn-authlogin">INGRESAR</button>      \n      </ion-col>\n      <ion-col col-12>\n        <button (click)="goAuthRegister()" ion-button small outline class="btn-authregister">Crear cuenta</button>      \n        <button (click)="goAuthPasswordEmail()" ion-button small outline class="btn-authpasswordemail">¿Olvidaste tu contraseña?</button>      \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/home/luiscordero29/Projects/nidoo/nidoo-test/src/pages/authlogin/authlogin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], AuthloginPage);
    return AuthloginPage;
}());

//# sourceMappingURL=authlogin.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_nidoo_service_nidoo_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nidoo_nidoo__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GoogleMapsPage = /** @class */ (function () {
    function GoogleMapsPage(navCtrl, navParams, NidooService, alertCtrl, loadingCtrl, modalCtrl, storage, AuthService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.NidooService = NidooService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.AuthService = AuthService;
        this.data = {};
        this.IfFooter = false;
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
    GoogleMapsPage.prototype.ionViewDidLoad = function () {
        /*
        * Loading
        */
        var loading = this.loadingCtrl.create({
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
    };
    GoogleMapsPage.prototype.getItems = function (ev) {
        var _this = this;
        this.items = [];
        /*
        *	set address
        */
        var address = ev.target.value;
        /*
        * search address on google maps
        */
        if (address.length > 0) {
            var search = 'Bogotá, ' + address;
            this.NidooService.searchAddress(search).then(function (data) {
                _this.data.address = data;
                if (_this.data.address.status != 'OK') {
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Error',
                        subTitle: 'Ingrese una dirección valida!',
                        buttons: ['OK']
                    });
                    alert_1.present();
                    _this.data.google_address = '';
                    _this.items = [];
                }
                else {
                    for (var i = 0; i < _this.data.address.results.length; i++) {
                        var elements = _this.data.address.results[i].address_components;
                        var element = '';
                        for (var i_1 = 0; i_1 < elements.length; i_1++) {
                            if (elements[i_1].types[0] == 'route') {
                                if (elements[i_1].long_name) {
                                    element = elements[i_1].long_name;
                                }
                            }
                            if (elements[i_1].types[0] == 'locality') {
                                if (elements[i_1].long_name) {
                                    if (element.length > 0) {
                                        element = element + ', ' + elements[i_1].long_name;
                                    }
                                    else {
                                        element = elements[i_1].long_name;
                                    }
                                }
                            }
                            if (elements[i_1].types[0] == 'country') {
                                if (elements[i_1].long_name) {
                                    if (element.length > 0) {
                                        element = element + ', ' + elements[i_1].long_name;
                                    }
                                    else {
                                        element = elements[i_1].long_name;
                                    }
                                }
                            }
                        }
                        _this.items.push(element);
                    }
                }
            });
        }
        /*
        *	filtrar direccion
        */
        if (address && address.trim() != '') {
            if (this.items.length > 0) {
                this.items = this.items.filter(function (item) {
                    return (item.toLowerCase().indexOf(address.toLowerCase()) > -1);
                });
            }
        }
    };
    GoogleMapsPage.prototype.goGoogleMapsAddress = function (item) {
        this.MapZoom = 16;
        this.MapCenter = item;
        this.data.google_address = '';
        this.items = [];
    };
    GoogleMapsPage.prototype.showNidoos = function (nidoos) {
        this.showFilter();
        this.slidesNidoos.slideTo(0);
        this.ShowNidoos = nidoos;
        this.IfFooter = true;
    };
    GoogleMapsPage.prototype.hideNidoos = function () {
        this.hideFilter();
        this.IfFooter = false;
    };
    GoogleMapsPage.prototype.viewNidoo = function (nidoo_id) {
        console.log('Id Nidoo: ' + nidoo_id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__nidoo_nidoo__["a" /* NidooPage */], {
            data: nidoo_id
        });
    };
    GoogleMapsPage.prototype.showFilter = function () {
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
    };
    GoogleMapsPage.prototype.hideFilter = function () {
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
    };
    GoogleMapsPage.prototype.filterNidoos = function (type) {
        switch (type) {
            case 'car':
                if (this.data.typeVehicle.bicycle && this.data.typeVehicle.motorcycle) {
                    this.data.typeVehicle.bicycle = false;
                    this.data.typeVehicle.motorcycle = false;
                    this.data.filter = 'car';
                    this.nidoosType('Carro o Camioneta');
                }
                else {
                    this.data.typeVehicle.bicycle = true;
                    this.data.typeVehicle.motorcycle = true;
                    this.data.filter = 'all';
                    this.nidoos();
                }
                break;
            case 'bicycle':
                if (this.data.typeVehicle.car && this.data.typeVehicle.motorcycle) {
                    this.data.typeVehicle.car = false;
                    this.data.typeVehicle.motorcycle = false;
                    this.data.filter = 'bicycle';
                    this.nidoosType('Bicicleta');
                }
                else {
                    this.data.typeVehicle.car = true;
                    this.data.typeVehicle.motorcycle = true;
                    this.data.filter = 'all';
                    this.nidoos();
                }
                break;
            case 'motorcycle':
                if (this.data.typeVehicle.bicycle && this.data.typeVehicle.car) {
                    this.data.typeVehicle.car = false;
                    this.data.typeVehicle.bicycle = false;
                    this.data.filter = 'motorcycle';
                    this.nidoosType('Motocicleta');
                }
                else {
                    this.data.typeVehicle.car = true;
                    this.data.typeVehicle.bicycle = true;
                    this.data.filter = 'all';
                    this.nidoos();
                }
                break;
        }
    };
    GoogleMapsPage.prototype.nidoosType = function (nidooType) {
        var _this = this;
        /*
        * Load Nidoos
        */
        var a;
        var n;
        var r;
        var Marker;
        var Reservations;
        var Address;
        var Nidoos;
        var NidooIcon;
        var Spaces;
        var photo;
        var path;
        var parking;
        this.positionsAddress = [];
        this.NidooService.allianceType(nidooType).then(function (data) {
            _this.dataNidoos = data;
            parking = _this.dataNidoos.message.parking;
            path = _this.dataNidoos.message.path;
            Marker = _this.dataNidoos.message.marker;
            Reservations = _this.dataNidoos.message.reservations;
            Address = _this.dataNidoos.message.address;
            Nidoos = _this.dataNidoos.message.nidoos;
            for (a = 0; a < Address.length; a++) {
                /*
                  Calcular Espacios
                */
                Spaces = 0;
                for (r = 0; r < Reservations.length; r++) {
                    if (Reservations[r].id == Address[a].id) {
                        Spaces = Reservations[r].spaces;
                    }
                }
                for (n = 0; n < Nidoos.length; n++) {
                    if (Nidoos[n].id == Address[a].id) {
                        Spaces = Nidoos[n].spaces - Spaces;
                    }
                }
                if (Spaces > 0) {
                    /*
                      Info Nidoos
                    */
                    NidooIcon = Marker;
                    /*
                    * Push Nidoo
                    */
                    _this.FooterNidoos = [];
                    for (n = 0; n < Nidoos.length; n++) {
                        if (Nidoos[n].address_one == Address[a].address_one) {
                            var photos = Nidoos[n].nidoo_photo_path;
                            photos = photos.split(',');
                            if (photos[0].length > 0) {
                                photo = path + '/' + photos[0];
                            }
                            else {
                                photo = parking;
                            }
                            _this.FooterNidoos.push({
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
                    _this.positionsAddress.push({
                        nidoos: _this.FooterNidoos,
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
    };
    GoogleMapsPage.prototype.nidoos = function () {
        var _this = this;
        /*
        * Load Nidoos
        */
        var a;
        var n;
        var r;
        var Marker;
        var Reservations;
        var Address;
        var Nidoos;
        var NidooIcon;
        var Spaces;
        var photo;
        var path;
        var parking;
        this.NidooService.alliance().then(function (data) {
            _this.dataNidoos = data;
            parking = _this.dataNidoos.message.parking;
            path = _this.dataNidoos.message.path;
            Marker = _this.dataNidoos.message.marker;
            Reservations = _this.dataNidoos.message.reservations;
            Address = _this.dataNidoos.message.address;
            Nidoos = _this.dataNidoos.message.nidoos;
            for (a = 0; a < Address.length; a++) {
                /*
                  Calcular Espacios
                */
                Spaces = 0;
                for (r = 0; r < Reservations.length; r++) {
                    if (Reservations[r].id == Address[a].id) {
                        Spaces = Reservations[r].spaces;
                    }
                }
                for (n = 0; n < Nidoos.length; n++) {
                    if (Nidoos[n].id == Address[a].id) {
                        Spaces = Nidoos[n].spaces - Spaces;
                    }
                }
                if (Spaces > 0) {
                    /*
                      Info Nidoos
                    */
                    NidooIcon = Marker;
                    /*
                    * Push Nidoo
                    */
                    _this.FooterNidoos = [];
                    for (n = 0; n < Nidoos.length; n++) {
                        if (Nidoos[n].address_one == Address[a].address_one) {
                            var photos = Nidoos[n].nidoo_photo_path;
                            photos = photos.split(',');
                            if (photos[0].length > 0) {
                                photo = path + '/' + photos[0];
                            }
                            else {
                                photo = parking;
                            }
                            _this.FooterNidoos.push({
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
                    _this.positionsAddress.push({
                        nidoos: _this.FooterNidoos,
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
    };
    GoogleMapsPage.prototype.initNguiMap = function () {
        this.MapZoom = 14;
        this.MapCenter = 'Bogotá, Colombia';
        this.nidoos();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */])
    ], GoogleMapsPage.prototype, "slidesNidoos", void 0);
    GoogleMapsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-google-maps',template:/*ion-inline-start:"/home/luiscordero29/Projects/nidoo/nidoo-test/src/pages/google-maps/google-maps.html"*/'<ion-content>\n    \n  <ion-searchbar [(ngModel)]="data.google_address" (ionInput)="getItems($event)" class="main-search" placeholder="¿Dónde quieres parquear?"></ion-searchbar>\n  <ion-list class="items">\n    <ion-item *ngFor="let item of items" (click)="goGoogleMapsAddress(item)">\n      <ion-icon name="ios-locate-outline"></ion-icon> {{ item }}\n    </ion-item>\n  </ion-list>\n\n  <ngui-map \n    zoom = "{{ MapZoom }}" \n    center = "{{ MapCenter }}" \n    >\n    <marker \n      *ngFor = "let address of positionsAddress" \n      (click)="showNidoos(address.nidoos)"        \n      [position] = "address.LatLng"\n      [icon] = "address.icon"\n      >\n    </marker>\n  </ngui-map>\n\n  <ion-slides class="footer-nidoos" [hidden]="!IfFooter" pager>\n    <ion-slide *ngFor = "let nidoo of ShowNidoos">\n      \n      <ion-fab class="btn-close-footer-nidoos">\n        <button (click)="hideNidoos()" ion-fab mini color="dark"><ion-icon name="close"></ion-icon></button>\n      </ion-fab>\n      <ion-grid class="nidoo-detail">\n        <ion-row>\n          <ion-col col-12>\n            <div text-center class="thumbnail">\n              <img-loader src="{{ nidoo.photo }}" style="background-position: center center"></img-loader>\n            </div>\n          </ion-col>\n          <ion-col col-12>\n            <div text-center class="text-primary">\n              {{ nidoo.address_one}}\n            </div>\n          </ion-col>\n          <ion-col col-12>\n            <div text-center class="text-secondary">\n              <b>Tipo de Vehiculo:</b> {{ nidoo.type}}\n            </div>\n          </ion-col>\n          <ion-col col-12>\n            <div text-center class="text-secondary">\n              <b>Espacios Disponibles:</b> {{ nidoo.spaces }}\n            </div>\n          </ion-col> [virtualScroll]="nidoo"\n        </ion-row>\n      </ion-grid>\n      <button (click)="viewNidoo(nidoo.id)" ion-button block large class="btn-reservation">SELECCIONAR PARQUEADERO</button>\n    \n    </ion-slide>\n  </ion-slides>\n\n  <ion-fab (click)="filterNidoos(\'car\')" *ngIf="data.typeVehicle.car" bottom left class="nidoo-car">\n    <button ion-fab>\n      Carro\n    </button>\n  </ion-fab>\n\n  <ion-fab (click)="filterNidoos(\'bicycle\')" *ngIf="data.typeVehicle.bicycle" bottom center class="nidoo-bicycle">\n    <button ion-fab>\n      Bici\n    </button>\n  </ion-fab>\n\n  <ion-fab (click)="filterNidoos(\'motorcycle\')" *ngIf="data.typeVehicle.motorcycle" bottom right class="nidoo-motorcycle">\n    <button ion-fab>\n      Moto\n    </button>\n  </ion-fab>\n         \n</ion-content>'/*ion-inline-end:"/home/luiscordero29/Projects/nidoo/nidoo-test/src/pages/google-maps/google-maps.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_nidoo_service_nidoo_service__["a" /* NidooServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], GoogleMapsPage);
    return GoogleMapsPage;
}());

//# sourceMappingURL=google-maps.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favorites_favorites__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reservations_reservations__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nidoos_nidoos__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = /** @class */ (function () {
    function TabsPage(AuthService) {
        this.AuthService = AuthService;
        this.tabRootHome = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tabRootFavorites = __WEBPACK_IMPORTED_MODULE_2__favorites_favorites__["a" /* FavoritesPage */];
        this.tabRootReservations = __WEBPACK_IMPORTED_MODULE_3__reservations_reservations__["a" /* ReservationsPage */];
        this.tabRootNidoos = __WEBPACK_IMPORTED_MODULE_4__nidoos_nidoos__["a" /* NidoosPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/luiscordero29/Projects/nidoo/nidoo-test/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tabRootHome" tabTitle="Home" tabIcon="nidoo-home"></ion-tab>\n  <ion-tab [root]="tabRootFavorites" tabTitle="Favoritos" tabIcon="nidoo-favorites"></ion-tab>\n  <ion-tab [root]="tabRootReservations" tabTitle="Reservas" tabIcon="nidoo-reservations"></ion-tab>\n  <ion-tab [root]="tabRootNidoos" tabTitle="Nidoos" tabIcon="nidoo-nidoos"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/luiscordero29/Projects/nidoo/nidoo-test/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NidooServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NidooServiceProvider = /** @class */ (function () {
    //apiUrl = 'http://127.0.0.1:8000/api/app/nidoos';
    function NidooServiceProvider(http) {
        this.http = http;
        this.apiUrl = 'http://54.82.37.244/api/app/nidoos';
    }
    NidooServiceProvider.prototype.nidoos = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/index').subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    NidooServiceProvider.prototype.nidoosType = function (nidooType) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/type/' + nidooType).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    NidooServiceProvider.prototype.alliance = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/alliance').subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    NidooServiceProvider.prototype.allianceType = function (nidooType) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/alliancetype/' + nidooType).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    NidooServiceProvider.prototype.searchAddress = function (address) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=AIzaSyCiwjZlnpoWv_EqO-czlw6pK8UYExZuvFw').subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    NidooServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], NidooServiceProvider);
    return NidooServiceProvider;
}());

//# sourceMappingURL=nidoo-service.js.map

/***/ })

},[226]);
//# sourceMappingURL=main.js.map