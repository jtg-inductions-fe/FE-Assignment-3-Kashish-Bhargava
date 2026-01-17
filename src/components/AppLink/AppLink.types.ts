import { LinkProps as RouterLinkProps } from 'react-router-dom';

import { TypographyProps } from '@mui/material';

export interface AppLinkProps extends RouterLinkProps {
    /** Link text */
    label: string;

    /** Typography variant (controls fontSize, lineHeight, fontWeight) */
    variant?: TypographyProps['variant'];

    /** Optional font weight override */
    fontWeight?: TypographyProps['fontWeight'];

    /** Text color */
    color?: string;

    /** Remove underline */
    noUnderline?: boolean;

    /** Optional icon before text */
    startIcon?: React.ReactNode;

    /** Optional icon after text */
    endIcon?: React.ReactNode;
}
