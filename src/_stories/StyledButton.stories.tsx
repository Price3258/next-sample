import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { useState } from 'react';
import StyledButton, { variants } from '~/components/StyledButton';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof StyledButton> = {
    component: StyledButton,
    argTypes: {
        variant: {
            options: ['primary', 'success', 'transparent'],
            control: { type: 'radio' },
        },
        onClick: { action: 'clicked' },
    },
};

export default meta;
type Story = StoryObj<typeof StyledButton>;

export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'Primary Button', // 기본 텍스트 추가
        onClick: () => {
            console.log('Primary button clicked!');
        }
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

const Template: StoryFn<{ variant: keyof typeof variants }> = (args) => {
    const [count, setCount] = useState(0);

    const onClick = (e: React.MouseEvent) => {
        action('increment')(e, count);
        setCount((prev) => prev + 1);
    };

    return (
        <StyledButton variant={args.variant} onClick={onClick}>
            Clicked {count} times
        </StyledButton>
    );
};

export const Test = Template.bind({});

Test.args = {
    variant: 'success', // 기본 variant 값
};