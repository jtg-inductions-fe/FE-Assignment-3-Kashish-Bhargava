import NotFoundImage from '@assets/images/not-found.png';
import { Error } from '@components';

export const NotFound = () => (
    <Error
        title="Page not found"
        description="Oops! Looks like you followed a bad link. If you think this is a problem with us, please tell us."
        image={NotFoundImage}
        altText="404 not found"
    />
);
