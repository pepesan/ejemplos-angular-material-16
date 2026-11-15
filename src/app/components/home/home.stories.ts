import { Meta, StoryObj, moduleMetadata } from '@storybook/angular-vite';
import { HomeComponent } from './home.component';

const meta: Meta<HomeComponent> = {
  title: 'Pages/Home',
  component: HomeComponent,
  decorators: [moduleMetadata({ declarations: [HomeComponent] })],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<HomeComponent>;

export const Default: Story = {};
