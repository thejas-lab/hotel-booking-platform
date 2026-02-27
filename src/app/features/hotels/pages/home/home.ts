import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
  
  <section class="hero">
    <div class="hero-content">
      <h1>Find & Manage Hotels Easily</h1>
      <p>Manage hotels across multiple cities with our modern admin system.</p>
      <a routerLink="/hotels" class="btn-primary">Explore Hotels</a>
    </div>
  </section>

  <section class="cities">
    <h2>Popular Cities</h2>

    <div class="city-grid">
      <div class="city-card" *ngFor="let city of cities">
        <h3>{{ city }}</h3>
        <a routerLink="/hotels" class="btn-secondary">View Hotels</a>
      </div>
    </div>
  </section>

  `,
  styles: [`

    .hero {
      background: linear-gradient(to right, #1e88e5, #1565c0);
      color: white;
      padding: 100px 20px;
      text-align: center;
    }

    .hero-content h1 {
      font-size: 42px;
      margin-bottom: 20px;
    }

    .hero-content p {
      font-size: 18px;
      margin-bottom: 30px;
    }

    .btn-primary {
      background: white;
      color: #1565c0;
      padding: 12px 25px;
      border-radius: 6px;
      text-decoration: none;
      font-weight: bold;
      transition: 0.3s;
    }

    .btn-primary:hover {
      background: #ffeb3b;
    }

    .cities {
      padding: 60px 40px;
      text-align: center;
    }

    .cities h2 {
      margin-bottom: 40px;
      font-size: 30px;
    }

    .city-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
    }

    .city-card {
      padding: 30px;
      border-radius: 10px;
      background: #f5f5f5;
      transition: 0.3s;
    }

    .city-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.1);
    }

    .btn-secondary {
      display: inline-block;
      margin-top: 15px;
      background: #1e88e5;
      color: white;
      padding: 8px 18px;
      border-radius: 5px;
      text-decoration: none;
    }

    @media(max-width: 768px) {
      .hero-content h1 {
        font-size: 28px;
      }
    }

  `]
})
export class HomeComponent {

  cities = ['Delhi', 'Mumbai', 'Bangalore', 'Chennai'];

}