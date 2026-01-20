import { Link as RouterLink } from 'react-router-dom';

import { Link, Typography } from '@mui/material';

import { AppLinkProps } from './AppLink.types';

/**
 * AppLink component
 * @param props - Props for the AppLink component
 * @returns AppLink component
 */
export const AppLink = (props: AppLinkProps) => {
    /**
     * Props for the AppLink component
     */
    const {
        label,
        variant = 'body1',
        fontWeight,
        color = 'inherit',
        noUnderline = true,
        startIcon,
        endIcon,
        ...linkProps
    } = props;

    return (
        <Link
            component={RouterLink}
            display="inline-flex"
            alignItems="center"
            gap={1}
            sx={{
                textDecoration: noUnderline ? 'none' : 'underline',
                color,
            }}
            {...linkProps}
        >
            {startIcon ? startIcon : null}
            <Typography variant={variant} fontWeight={fontWeight}>
                {label}
            </Typography>
            {endIcon ? endIcon : null}
        </Link>
    );
};
