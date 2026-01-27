import type { BookingStatusFilter } from '@services/BookingApi';

/**Props for PurchaseHistoryContainer */
export interface PurchaseHistoryContainerProps {
    /**Active booking filter */
    activeTab: BookingStatusFilter;
}
