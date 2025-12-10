import { GridColumns } from '@models/layout';

/**Represents layout-related UI state*/
export interface LayoutState {
    /**Map of layout keys to their respective grid column settings */
    gridColumns: Record<string, GridColumns>;
}

/**Payload structure for updating grid column settings */
export interface SetGridColumnsPayload {
    /**Unique identifier for the grid layout */
    key: string;
    /**Column configuration for different breakpoints */
    columns: GridColumns;
}
