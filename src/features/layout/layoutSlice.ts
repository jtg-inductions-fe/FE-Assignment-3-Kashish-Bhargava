import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LayoutState, SetGridColumnsPayload } from './layoutSlice.types';

const initialState: LayoutState = {
    gridColumns: {
        MovieGrid: { xs: 6, sm: 4, md: 3, lg: 2 },
    },
};

const layoutSlice = createSlice({
    name: 'layout',
    initialState,
    reducers: {
        setGridColumns: (
            state,
            action: PayloadAction<SetGridColumnsPayload>,
        ) => {
            state.gridColumns[action.payload.key] = action.payload.columns;
        },
    },
});

export const { setGridColumns } = layoutSlice.actions;
export default layoutSlice.reducer;
