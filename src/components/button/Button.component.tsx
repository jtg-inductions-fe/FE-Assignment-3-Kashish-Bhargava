import { StyledButton } from './Button.styles';
import { ButtonProps } from './Button.types';

export const Button = ({ text, ...props }: ButtonProps) => (
    <StyledButton {...props}>{text}</StyledButton>
);
