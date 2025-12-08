import ErrorPageImage from '@assets/images/error-boundary.png';
import { Error } from '@components';

export const ErrorPage = () => (
    <Error
        title="Something has gone seriously wrong"
        description="Uh-oh! Our server took a nap. We're working to reconnect things. Meanwhile, maybe grab a coffee."
        image={ErrorPageImage}
        altText="Server took a nap."
    />
);
