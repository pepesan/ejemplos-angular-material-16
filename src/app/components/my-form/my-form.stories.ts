import { Meta, StoryObj, moduleMetadata } from '@storybook/angular-vite';
import { MyFormComponent } from './my-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

const meta: Meta<MyFormComponent> = {
  title: 'Material/Forms',
  component: MyFormComponent,
  decorators: [moduleMetadata({ declarations: [MyFormComponent], imports: [MatFormFieldModule, MatIconModule, MatInputModule] })],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<MyFormComponent>;

export const Default: Story = {};
