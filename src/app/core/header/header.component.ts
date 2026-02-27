import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
  <header class="header">
    <div class="logo">
      <a routerLink="/">🏨 Bag2Bag</a>
    </div>

    <nav class="nav-links" [class.active]="menuOpen()">
      <a routerLink="/" routerLinkActive="active" (click)="closeMenu()">Home</a>
      <a routerLink="/hotels" routerLinkActive="active" (click)="closeMenu()">Hotels</a>
    </nav>

    <div class="hamburger" (click)="toggleMenu()">
      ☰
    </div>
  </header>
  `,
  styles: [`
    .header {
  position: sticky;
  top: 0;
  z-index: 1000;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;

  background: #1e88e5;
  color: white;
}

body {
  margin: 0;
  padding-top: 80px;
}

    .nav-links {
      display:flex;
      gap:20px;
    }

    .nav-links a {
      color:white;
      text-decoration:none;
    }

    .hamburger {
      display:none;
      cursor:pointer;
      font-size:22px;
    }

    @media(max-width:768px){
      .nav-links {
        display:none;
        position:absolute;
        right:0;
        top:60px;
        flex-direction:column;
        background:#1e88e5;
        padding:20px;
      }

      .nav-links.active {
        display:flex;
      }

      .hamburger {
        display:block;
      }
    }
  `]
})
export class HeaderComponent {

  menuOpen = signal(false);

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }
}