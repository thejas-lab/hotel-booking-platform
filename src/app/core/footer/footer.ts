import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
  <footer class="footer">

    <div class="footer-container">

      <!-- Logo & About -->
      <div class="footer-section">
        <h2>🏨 Bag2Bag</h2>
        <p>Your trusted platform to manage hotels across multiple cities.</p>
      </div>

      <!-- Quick Links -->
      <div class="footer-section">
        <h3>Quick Links</h3>
        <a routerLink="/">Home</a>
        <a routerLink="/hotels">Hotels</a>
      </div>

      <!-- Cities -->
      <div class="footer-section">
        <h3>Cities</h3>
        <p>Delhi</p>
        <p>Mumbai</p>
        <p>Bangalore</p>
        <p>Chennai</p>
      </div>

    </div>

    <!-- Bottom Bar -->
    <div class="footer-bottom">
      © 2026 HotelAdmin. All Rights Reserved.
    </div>

  </footer>
  `,
  styles: [`
    .footer {
      background:  #1e88e5;
      color: white;
      margin-top: 40px;
    }

    .footer-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 30px;
      padding: 40px;
    }

    .footer-section h2,
    .footer-section h3 {
      margin-bottom: 15px;
    }

    .footer-section a {
      display: block;
      color: #ccc;
      text-decoration: none;
      margin-bottom: 8px;
      transition: 0.3s;
    }

    .footer-section a:hover {
      color: #1e88e5;
    }

    .footer-bottom {
      text-align: center;
      padding: 15px;
      background: #111;
      font-size: 14px;
    }

    @media(max-width: 768px) {
      .footer-container {
        padding: 20px;
      }
    }
  `]
})
export class FooterComponent {}