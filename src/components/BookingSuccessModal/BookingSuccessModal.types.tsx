/**Props for BookingSuccessModal */
export interface BookingSuccessModalProps {
    /**Controls model : open or close */
    open: boolean;
    /**Booking ID */
    bookingId: number | null;
    /**Handler to close the modal */
    onClose: () => void;
    /**Handler to navigate to your order section */
    onViewTicket: () => void;
}
