import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclaraComponent } from './declara.component';
import { AppModule } from '../../../../app.module';

describe('DeclaraComponent', () => {
  let component: DeclaraComponent;
  let fixture: ComponentFixture<DeclaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [AppModule] }).compileComponents();
    fixture = TestBed.createComponent(DeclaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
