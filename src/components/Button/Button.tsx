import { ButtonProps as MuiButtonProps } from '@mui/material/Button';

import { StyledButton } from './Button.styles';

export const Button = (props: MuiButtonProps) => {
    const { children, ...rest } = props;

    return <StyledButton {...rest}>{children}</StyledButton>;
};
