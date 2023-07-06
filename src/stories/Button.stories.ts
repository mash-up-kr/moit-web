import type { Meta, StoryObj } from '@storybook/react';
import Button from '@components/Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: '기본 버튼',
  },
};
export const Disabled: Story = {
  args: {
    label: '비활성화 상태',
    isDisabled: true,
  },
};
