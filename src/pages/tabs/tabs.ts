import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { FavoritesPage } from '../favorites/favorites';
import { ReservationsPage } from '../reservations/reservations';
import { NidoosPage } from '../nidoos/nidoos';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabRootHome = HomePage;
  tabRootFavorites = FavoritesPage;
  tabRootReservations = ReservationsPage;
  tabRootNidoos = NidoosPage;
  public data: any;
  constructor(
    public AuthService: AuthServiceProvider,
  ){}
}
