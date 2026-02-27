import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HotelsServices, Hotel } from './hotels.services';

@Component({
  selector: 'app-hotels',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hotels.html',
  styleUrls: ['./hotels.scss'],
})
export class HotelsComponent implements OnInit {

  hotels: Hotel[] = [];

  constructor(private hotelsServices: HotelsServices) {}

  ngOnInit(): void {
    this.loadHotels();
  }

  loadHotels(): void {
    this.hotelsServices.getHotels().subscribe({
      next: (data) => this.hotels = data,
      error: (err) => console.error(err)
    });
  }
}