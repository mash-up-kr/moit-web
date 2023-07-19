import type { Meta, StoryObj } from '@storybook/react';
import MoitRegisterScreen from 'screens/MoitRegisterScreen';

const meta = {
  title: 'Screen/MoitRegisterScreen',
  component: MoitRegisterScreen,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof MoitRegisterScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
};
