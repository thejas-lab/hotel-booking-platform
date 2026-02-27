import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    loadComponent: () =>
      import('./features/home/home')
        .then(m => m.HomeComponent)
  },

  {
    path: 'hotels/:city',
    loadComponent: () =>
      import('./features/hotels/pages/hotel-list/hotel-list.component')
      .then(m => m.HotelListComponent)
  },

  {
    path: 'hotel/:id',
    loadComponent: () =>
      import('./features/hotels/pages/hotel-detail/hotel-detail')
      .then(m => m.HotelDetail)
  }

];
