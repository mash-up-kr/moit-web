import type { Meta, StoryObj } from '@storybook/react';
import theme from '@styles/theme';
import ScreenHeader from '@components/ScreenHeader';
import SvgIcon from '@components/SvgIcon';

const meta = {
  title: 'Example/ScreenHeader',
  component: ScreenHeader,
  tags: ['autodocs'],
} satisfies Meta<typeof ScreenHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Resgister: Story = {
  args: {
    title: '스터디 생성',
    leftIcon: <SvgIcon name="ArrowLeft" size={24} />,
  },
};

export const NoTitle: Story = {
  args: {
    title: '',
    leftIcon: <SvgIcon name="ArrowLeft" size={24} />,
  },
};

export const DarkBg: Story = {
  args: {
    title: '어두운 배경',
    titleColor: theme.palette.white,
    leftIcon: (
      <SvgIcon name="ArrowLeft" size={24} color={theme.palette.white} />
    ),
    rightIcon: (
      <SvgIcon
        name="ArrowLeft"
        size={24}
        color={theme.palette.white}
        rotate={180}
      />
    ),
  },
  parameters: {
    backgrounds: {
      default: 'black',
      values: [
        {
          name: 'black',
          value: theme.palette.black,
        },
      ],
    },
  },
};
