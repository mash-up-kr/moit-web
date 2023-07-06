import type { Meta, StoryObj } from '@storybook/react';
import StudyRegisterScreen from 'screens/StudyRegisterScreen';

const meta = {
  title: 'Screen/StudyRegisterScreen',
  component: StudyRegisterScreen,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof StudyRegisterScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
};
