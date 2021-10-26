import { spacexApi } from '../services/spacex';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import launchReducer from '../features/launch/launchSlice';

export const store = configureStore({
  reducer: {
    launch: launchReducer,
    [spacexApi.reducerPath]: spacexApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(spacexApi.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
