import { useNavigate } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

import { Button } from '@components';
import { ROUTES } from '@constant';

import { StyledImage, TextWrapper, Wrapper } from './ErrorView.styles';
import { ErrorProps } from './ErrorView.types';

export const ErrorView = (props: ErrorProps) => {
    const { title, description, image, altText } = props;
    const navigate = useNavigate();

    return (
        <Wrapper>
            <Box>
                <StyledImage src={image} alt={altText} />
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
