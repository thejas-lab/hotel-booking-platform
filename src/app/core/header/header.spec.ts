import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header } from './header.component';

describe('Navbar', () => {
  let component: Header;
  let fixture: ComponentFixture<Header
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Navbar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
