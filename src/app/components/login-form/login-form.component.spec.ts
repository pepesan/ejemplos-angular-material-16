import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormComponent } from './login-form.component';
import { AppModule } from '../../app.module';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [AppModule] }).compileComponents();
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('requires both username and password', () => {
    expect(component.loginForm.controls['username'].hasError('required')).toBeTrue();
    expect(component.loginForm.controls['password'].hasError('required')).toBeTrue();
  });

  it('accepts non-empty credentials', () => {
    component.loginForm.setValue({ username: 'ada', password: 'secret' });
    expect(component.loginForm.valid).toBeTrue();
  });
});
