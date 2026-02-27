import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Hotel {
  id: number;
  name: string;
  description: string;
  city: string;
  address: string;
  latitude: number;
  longitude: number;
  rating: number;
  created_at: string;
}

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  private apiUrl = 'https://hotel-api-gzom.onrender.com/hotels';

  constructor(private http: HttpClient) {}
  createHotel(data: any) {
    return this.http.post('https://hotel-api-gzom.onrender.com/hotels', data);
  }
  
  getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.apiUrl);
  }
}