import { Meta, StoryObj, moduleMetadata } from '@storybook/angular-vite';
import { ButtonsComponent } from './buttons.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

const meta: Meta<ButtonsComponent> = {
  title: 'Material/Buttons',
  component: ButtonsComponent,
  decorators: [moduleMetadata({ declarations: [ButtonsComponent], imports: [MatButtonModule, MatDividerModule] })],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ButtonsComponent>;

export const Default: Story = {};
