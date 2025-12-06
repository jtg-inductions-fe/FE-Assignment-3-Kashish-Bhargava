import notFoundImage from '@assets/images/not-found.png';
import { ErrorLayout } from '@components';
export const NotFound = () => (
    <ErrorLayout
        title="Page not found"
        description="Oops! Looks like you followed a bad link. If you think this is a problem with us, please tell us."
        image={notFoundImage}
        altText="404 not found"
    />
);
