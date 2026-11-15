import { Meta, StoryObj, moduleMetadata } from '@storybook/angular-vite';
import { LoginFormComponent } from './login-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

const meta: Meta<LoginFormComponent> = {
  title: 'Forms/Login',
  component: LoginFormComponent,
  decorators: [moduleMetadata({ declarations: [LoginFormComponent], imports: [MatButtonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule] })],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<LoginFormComponent>;

// Esta story demuestra la validación del formulario; no realiza autenticación real.
export const Empty: Story = {};
