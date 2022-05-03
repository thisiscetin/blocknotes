import type { ThunkAction, Action } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

import notesReducer from "../features/notes/notesSlice";
import syncReducer from "../features/sync/syncSlice";

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    sync: syncReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
