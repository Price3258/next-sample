import styled, { css } from "styled-components";

export const variants = {
    primary: {
        backgroundColor: "blue",
        color: "white",
        border: "none",
    },
    success: {
        backgroundColor: "green",
        color: "white",
        border: "none",
    },
    transparent: {
        color: "#111111",
        backgroundColor: "transparent",
        border: '1px solid black'
    },
} as const;

type StyledButtonProps = {
    variant: keyof typeof variants;
};

const StyledButton = styled.button<StyledButtonProps>`
    ${({ variant }) => {
        const { backgroundColor, color, border } = variants[variant];
        return css`
            background-color: ${backgroundColor};
            color: ${color};
            border: ${border};
        `;
    }}

    border-radius: 12px;
    font-size: 16px;
    height: 40px;
    line-height: 20px;
    letter-spacing: 0;
    cursor: pointer;
    &:focus {
        outline: none;
    }
`;

export default StyledButton;