// app/store.ts
import { configureStore } from '@reduxjs/toolkit';

import fetchSlice from './features/fetch/fetchSlice';
import postingSlice from './features/writing/postingSlice';
import signupInputSlice from './features/signupInput/signupInputSlice';
import loginInputSlice from './features/loginInput/loginInputSlice';
import loginStateSlice from './features/loginState/loginStateSlice';

export const store = configureStore({
  reducer: {
    posting: postingSlice,
    fetchItem: fetchSlice,
    signupInput: signupInputSlice,
    loginInput: loginInputSlice,
    loginState: loginStateSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
