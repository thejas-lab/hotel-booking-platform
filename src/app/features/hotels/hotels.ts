import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HotelService, Hotel } from './hotels.services';

@Component({
  selector: 'app-hotels',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hotels.html',
  styleUrls: ['./hotels.scss'],
})
export class HotelsComponent implements OnInit {

  hotels: Hotel[] = [];

  constructor(private hotelService: HotelService) {}

  ngOnInit(): void {
    this.loadHotels();
  }

  loadHotels(): void {
    this.hotelService.getHotels().subscribe({
      next: (data) => this.hotels = data,
      error: (err) => console.error(err)
    });
  }
}