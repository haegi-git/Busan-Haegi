// app/store.ts
import { configureStore } from '@reduxjs/toolkit';

import fetchSlice from './features/fetch/fetchSlice';
import postingSlice from './features/writing/postingSlice';
import signupInputSlice from './features/signupInput/signupInputSlice';

export const store = configureStore({
  reducer: {
    posting: postingSlice,
    fetchItem: fetchSlice,
    signupInput: signupInputSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
