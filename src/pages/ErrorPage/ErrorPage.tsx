import ErrorPageImage from '@assets/images/error-boundary.png';
import { ErrorView } from '@components';

export const ErrorPage = () => (
    <ErrorView
        title="Something has gone seriously wrong"
        description="Uh-oh! Our server took a nap. We're working to reconnect things. Meanwhile, maybe grab a coffee."
        image={ErrorPageImage}
        altText="Server took a nap."
    />
);
