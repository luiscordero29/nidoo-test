import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NguiMapModule} from '@ngui/map';
import { IonicImageLoader } from 'ionic-image-loader';
import { IonicStorageModule } from '@ionic/storage';
import { GoogleMaps } from '@ionic-native/google-maps';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
/*
  Custom Page
*/
import { SplashScreenPage } from '../pages/splash-screen/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { FavoritesPage } from '../pages/favorites/favorites';
import { ReservationsPage } from '../pages/reservations/reservations';
import { NidoosPage } from '../pages/nidoos/nidoos';
import { GoogleMapsPage } from '../pages/google-maps/google-maps';
import { AuthPage } from '../pages/auth/auth';
import { AuthloginPage } from '../pages/authlogin/authlogin';
import { AuthregisterPage } from '../pages/authregister/authregister';
import { AuthaccountPage } from '../pages/authaccount/authaccount';
import { AuthpasswordemailPage } from '../pages/authpasswordemail/authpasswordemail';
import { NidooPage } from '../pages/nidoo/nidoo';

import { NidooServiceProvider } from '../providers/nidoo-service/nidoo-service';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

@NgModule({
  declarations: [
    MyApp,
    SplashScreenPage,
    TabsPage,       
    HomePage,
    FavoritesPage,
    ReservationsPage,
    NidoosPage,
    GoogleMapsPage,
    AuthPage,
    AuthloginPage,
    AuthregisterPage,
    AuthaccountPage,
    AuthpasswordemailPage,
    NidooPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyCiwjZlnpoWv_EqO-czlw6pK8UYExZuvFw'}),
    IonicModule.forRoot(MyApp),
    IonicImageLoader.forRoot(),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SplashScreenPage,
    TabsPage,
    HomePage,
    FavoritesPage,
    ReservationsPage,
    NidoosPage,
    GoogleMapsPage,
    AuthPage,
    AuthloginPage,
    AuthregisterPage,
    AuthaccountPage,
    AuthpasswordemailPage,
    NidooPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NidooServiceProvider,
    AuthServiceProvider,
    Geolocation
  ]
})
export class AppModule {}