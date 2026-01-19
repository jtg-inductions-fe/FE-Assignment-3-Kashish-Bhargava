import ErrorPageImage from '@assets/images/error-page.png';
import { ErrorView } from '@components';

/**
 * Error page component.
 * @returns The rendered error page.
 */
export const ErrorPage = () => (
    <ErrorView
        title="Something has gone seriously wrong"
        description="Uh-oh! Our server took a nap. We're working to reconnect things. Meanwhile, maybe grab a coffee."
        image={ErrorPageImage}
        altText="Server took a nap."
    />
);
