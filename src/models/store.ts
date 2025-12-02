import type { store } from '@app';
import type { rootReducer } from '@app';

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
