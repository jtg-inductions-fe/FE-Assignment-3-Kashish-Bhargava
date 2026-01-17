import { useNavigate } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

import { Button } from '@components';
import { ROUTES } from '@constant';

import { StyledErrorViewImage, TextWrapper, Wrapper } from './ErrorView.styles';
import { ErrorProps } from './ErrorView.types';

export const ErrorView = (props: ErrorProps) => {
    /**
     * Props for the error view component.
     */
    const { title, description, image, altText } = props;

    /**
     * Hook for navigating programmatically.
     */
    const navigate = useNavigate();

    return (
        <Wrapper>
            <Box>
                <StyledErrorViewImage src={image} alt={altText} />
            </Box>

            <TextWrapper>
                <Typography variant="h1" color="common.black">
                    {title}
                </Typography>
                <Typography variant="h2" color="text.primary">
                    {description}
                </Typography>
            </TextWrapper>

            <Button
                onClick={() => void navigate(ROUTES.HOME)}
                variant="contained"
            >
                Go Back Home
            </Button>
        </Wrapper>
    );
};
