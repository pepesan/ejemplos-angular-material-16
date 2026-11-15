import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuResponsiveComponent } from './menu-responsive.component';
import { AppModule } from '../../app.module';

describe('MenuResponsiveComponent', () => {
  let component: MenuResponsiveComponent;
  let fixture: ComponentFixture<MenuResponsiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [AppModule] }).compileComponents();
    fixture = TestBed.createComponent(MenuResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders the primary navigation links', () => {
    const links = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll('.main-menu a'),
      link => link.textContent?.trim()
    );
    expect(links.slice(0, 2)).toEqual(['Home', 'About']);
  });
});
