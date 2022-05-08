import type { ThunkAction, Action } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { throttle } from "lodash";

import notesReducer, { NoteState } from "../features/notes/notesSlice";
import syncReducer from "../features/sync/syncSlice";

type SavedNotes = { notes: NoteState[] };

const saveState = (state: SavedNotes) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("notes", serializedState);
  } catch {
    console.log("Error saving state");
  }
};

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    sync: syncReducer,
  },
});

store.subscribe(
  throttle(() => {
    saveState({
      notes: store.getState().notes.notes,
    });
  }, 1000)
);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
