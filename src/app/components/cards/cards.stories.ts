import { Meta, StoryObj, moduleMetadata } from '@storybook/angular-vite';
import { CardsComponent } from './cards.component';
import { MatCardModule } from '@angular/material/card';

const meta: Meta<CardsComponent> = {
  title: 'Material/Cards',
  component: CardsComponent,
  decorators: [moduleMetadata({ declarations: [CardsComponent], imports: [MatCardModule] })],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<CardsComponent>;

export const Default: Story = {};
