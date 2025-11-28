import { useNavigate } from 'react-router-dom';

import { Button } from '@components';
import { ROUTES } from '@constant';

import {
    ContentWrapper,
    Description,
    ImageWrapper,
    Message,
    StyledImage,
    TextWrapper,
    Wrapper,
} from './ErrorLayout.styles';
import { ErrorLayoutProps } from './ErrorLayout.types';

export const ErrorLayout = ({
    title,
    description,
    image,
    altText,
}: ErrorLayoutProps) => {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <ImageWrapper>
                <StyledImage src={image} alt={altText} />
            </ImageWrapper>

            <ContentWrapper>
                <TextWrapper>
                    <Message>{title}</Message>
                    <Description>{description}</Description>
                </TextWrapper>

                <Button
                    text="Go back home"
                    onClick={() => void navigate(ROUTES.HOME)}
                />
            </ContentWrapper>
        </Wrapper>
    );
};
