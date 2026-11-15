import { Meta, StoryObj, moduleMetadata } from '@storybook/angular-vite';
import { AboutComponent } from './about.component';

const meta: Meta<AboutComponent> = {
  title: 'Pages/About',
  component: AboutComponent,
  decorators: [moduleMetadata({ declarations: [AboutComponent] })],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<AboutComponent>;

export const Default: Story = {};
