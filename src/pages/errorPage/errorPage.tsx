import errorPageImage from '@assets/images/error-boundary.png';
import { ErrorLayout } from '@components';
export const ErrorPage = () => (
    <ErrorLayout
        title="Something has gone seriously wrong"
        description="Uh-oh! Our server took a nap. We're working to reconnect things. Meanwhile, maybe grab a coffee."
        image={errorPageImage}
        altText="Server took a nap."
    />
);
