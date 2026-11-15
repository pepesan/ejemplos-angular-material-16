import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMatMenuComponent } from './my-mat-menu.component';
import { AppModule } from '../../app.module';

describe('MyMatMenuComponent', () => {
  let component: MyMatMenuComponent;
  let fixture: ComponentFixture<MyMatMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [AppModule] }).compileComponents();
    fixture = TestBed.createComponent(MyMatMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
