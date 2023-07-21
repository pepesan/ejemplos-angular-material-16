import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMatMenuComponent } from './my-mat-menu.component';

describe('MyMatMenuComponent', () => {
  let component: MyMatMenuComponent;
  let fixture: ComponentFixture<MyMatMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyMatMenuComponent]
    });
    fixture = TestBed.createComponent(MyMatMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
