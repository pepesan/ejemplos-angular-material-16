import { Meta, StoryObj } from '@storybook/angular-vite';
import { MyDataTableComponent } from './my-data-table.component';

const meta: Meta<MyDataTableComponent> = {
  title: 'Material/Data Table',
  component: MyDataTableComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<MyDataTableComponent>;

// Cinco filas por página hacen visible la paginación con los datos de ejemplo.
export const Paginated: Story = {};
