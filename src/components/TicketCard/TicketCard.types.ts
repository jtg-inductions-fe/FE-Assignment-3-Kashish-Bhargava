import type { PurchaseHistoryTicket } from '@services/BookingApi';
/**Props for TicketCard component  */

export interface TicketCardProps {
    /**Booking data */
    booking: PurchaseHistoryTicket;
    /**Handler to cancel booking */
    onCancel: (bookingId: number) => void;
    /**To indicate cancellation in progress */
    isCancelling: boolean;
}
