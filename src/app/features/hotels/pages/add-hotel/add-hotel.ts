import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HotelService } from '../../hotels.services';

@Component({
  selector: 'app-add-hotel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-hotel.html',
  styleUrl: './add-hotel.scss'
})
export class AddHotelComponent {

  constructor(
    private hotelService: HotelService,
    private router: Router
  ) {}

  newHotel = {
    name: '',
    description: '',
    city: '',
    address: '',
    latitude: null,
    longitude: null
  };

  addHotel() {
    this.hotelService.createHotel(this.newHotel).subscribe({
      next: (res: any) => {
        console.log('Hotel added', res);
        this.router.navigate(['/hotels']);
      },
      error: (err: any) => {
        console.error('Error:', err);
      }
    });
  }
}