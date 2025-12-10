import type { rootReducer } from '@app/rootReducer';
import type { store } from '@app/store';

/**
 * Represents the overall state structure of the Redux store.
 */
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
