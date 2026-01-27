/**Props for ActionModal component */
export interface ActionModalProps {
    /**Controls model : open or close */
    open: boolean;
    /**Modal title */
    title: string;
    /**Booking ID */
    bookingId: number | null;
    /**Primary action button label */
    primaryActionLabel?: string;
    /**Primary action handler */
    onPrimaryAction?: () => void;
    /**Secondary action button label */
    secondaryActionLabel?: string;
    /**Secondary action handler */
    onSecondaryAction?: () => string;
    /**Handler to close the modal */
    onClose: () => void;
}
