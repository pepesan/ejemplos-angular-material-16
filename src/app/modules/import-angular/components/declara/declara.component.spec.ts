import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclaraComponent } from './declara.component';

describe('DeclaraComponent', () => {
  let component: DeclaraComponent;
  let fixture: ComponentFixture<DeclaraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeclaraComponent]
    });
    fixture = TestBed.createComponent(DeclaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
