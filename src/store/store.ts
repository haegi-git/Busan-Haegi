// app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import writingSlice from './features/writing/writingSlice';

export const store = configureStore({
  reducer: {
    writing: writingSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
