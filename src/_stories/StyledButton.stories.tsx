import { Meta, StoryObj } from '@storybook/react';
import StyledButton from '~/components/StyledButton';


const meta: Meta<typeof StyledButton> = {
    component: StyledButton,
    argTypes: {
        variant: {
            options: ['primary', 'success', 'transparent'],
            control: { type: 'radio' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof StyledButton>;

export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'Primary Button', // 기본 텍스트 추가
    },
};

export const Success: Story = {
    args: {
        variant: 'success',
        children: 'Success Button', // 기본 텍스트 추가
    },
};

export const Transparent: Story = {
    args: {
        variant: 'transparent',
        children: 'Transparent Button', // 기본 텍스트 추가
    },
};