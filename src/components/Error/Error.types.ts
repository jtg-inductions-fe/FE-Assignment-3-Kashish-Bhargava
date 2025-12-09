/**
 * Props for the reusable Error component.
 * @property title - The title of the error message.
 * @property description - A detailed description of the error.
 * @property image - URL of the image to display alongside the error message.
 * @property altText - Alternative text for the error image.
 */
export type ErrorProps = {
    title: string;
    description: string;
    image: string;
    altText: string;
};
