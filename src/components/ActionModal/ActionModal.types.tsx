import { ReactNode } from 'react';

/**Props for ActionModal component */
export interface ActionModalProps {
    /**Controls modal : open or close */
    open: boolean;
    /**Modal title */
    title: string;
    /**Booking ID */
    bookingId: number | null;
    /**Extra details to be displayed */
    description?: ReactNode;
    /**Primary action button label */
    primaryActionLabel?: string;
    /**Primary action handler */
    onPrimaryAction?: () => void;
    /**Secondary action button label */
    secondaryActionLabel?: string;
    /**Secondary action handler */
    onSecondaryAction?: () => void;
    /**Handler to close the modal */
    onClose: () => void;
}
