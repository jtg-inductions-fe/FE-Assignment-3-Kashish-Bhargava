import { StyledButton } from './Button.styles';
import { ButtonProps } from './Button.types';

export const Button = ({ children, ...props }: ButtonProps) => (
    <StyledButton {...props}>{children}</StyledButton>
);
