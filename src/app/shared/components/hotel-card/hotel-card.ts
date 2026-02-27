import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hotel } from '../../../features/hotels/hotels.services';

@Component({
  selector: 'app-hotel-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hotel-card.html',
  styleUrl: './hotel-card.scss'
})
export class HotelCardComponent {

  @Input() hotel!: Hotel;

}