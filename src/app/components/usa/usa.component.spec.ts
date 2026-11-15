import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsaComponent } from './usa.component';
import { AppModule } from '../../app.module';

describe('UsaComponent', () => {
  let component: UsaComponent;
  let fixture: ComponentFixture<UsaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [AppModule] }).compileComponents();
    fixture = TestBed.createComponent(UsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
