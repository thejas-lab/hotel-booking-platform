import { Routes } from '@angular/router';
import { HomeComponent } from './features/hotels/pages/home/home';
import { HotelsComponent } from './features/hotels/hotels';

export const routes: Routes = [
  { path: '', component: HomeComponent },   
  { path: 'hotels', component: HotelsComponent },
  { path: '**', redirectTo: '' }            
];