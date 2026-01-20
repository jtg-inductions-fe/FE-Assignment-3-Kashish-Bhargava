import { ReactNode } from 'react';

import { LinkProps as RouterLinkProps } from 'react-router-dom';

import { LinkProps as MuiLinkProps } from '@mui/material';
import { TypographyProps } from '@mui/material';

export interface AppLinkProps extends RouterLinkProps, MuiLinkProps {
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
    startIcon?: ReactNode;

    /** Optional icon after text */
    endIcon?: ReactNode;
}
