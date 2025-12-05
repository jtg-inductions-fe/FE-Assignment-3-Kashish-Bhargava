import { GridColumns } from '@models/layout';

export interface LayoutState {
    gridColumns: Record<string, GridColumns>;
}

export interface SetGridColumnsPayload {
    key: string;
    columns: GridColumns;
}
