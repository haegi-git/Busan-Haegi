// app/store.ts
import { configureStore } from '@reduxjs/toolkit';

import fetchSlice from './features/fetch/fetchSlice';
import postingSlice from './features/writing/postingSlice';
import signupInputSlice from './features/signupInput/signupInputSlice';
import loginInputSlice from './features/loginInput/loginInputSlice';
import loginStateSlice from './features/loginState/loginStateSlice';
import locationSlice from './features/location/locationSlice';
import commentsSlice from './features/fetch/commentsSlice';

export const store = configureStore({
  reducer: {
    posting: postingSlice,
    fetchItem: fetchSlice,
    signupInput: signupInputSlice,
    loginInput: loginInputSlice,
    loginState: loginStateSlice,
    locationSlice: locationSlice,
    commentsSlice: commentsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
