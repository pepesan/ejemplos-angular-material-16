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
  
  it('shows a safe validation message on submit without logging credentials', () => {
    component.loginForm.setValue({ username: 'ada', password: 'secret' });
    const logSpy = spyOn(console, 'log');
    const form = (fixture.nativeElement as HTMLElement).querySelector('form')!;

    form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    fixture.detectChanges();

    const status = (fixture.nativeElement as HTMLElement).querySelector('[role="status"]');
    expect(status?.textContent).toContain('autenticación no está configurada');
    expect(status?.textContent).not.toContain('secret');
    expect(logSpy).not.toHaveBeenCalled();
  });
});
