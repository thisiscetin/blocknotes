import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

import moment from "moment";

export interface NoteState {
  title: string;
  body: string;
  createdAt: number;
}

export interface NotesState {
  selectedNote: number;
  version: string;
  notes: NoteState[];
}

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("notes");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState).notes;
  } catch (err) {
    return undefined;
  }
};

const initialState: NotesState = {
  selectedNote: 0,
  version: "",
  notes: loadState() || [
    {
      title: "",
      body: "",
      createdAt: moment().unix(),
    },
  ],
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    titleChange: (state, action: PayloadAction<string>) => {
      state.notes[state.selectedNote].title = action.payload;
    },
    bodyChange: (state, action: PayloadAction<string>) => {
      state.notes[state.selectedNote].body = action.payload;
    },
    noteChange: (state, action: PayloadAction<number>) => {
      state.selectedNote = Math.min(action.payload, state.notes.length - 1);
    },
    addNote: (state) => {
      state.notes.unshift({
        title: "",
        body: "",
        createdAt: moment().unix(),
      });
      state.selectedNote = 0;
    },
    removeNote: (state, action: PayloadAction<number>) => {
      state.notes.splice(action.payload, 1);
    },
    setVersion: (state, action: PayloadAction<string>) => {
      state.version = action.payload;
    },
  },
});

export const selectedTitle = (state: RootState) =>
  state.notes.notes[state.notes.selectedNote]?.title;

export const selectedBody = (state: RootState) =>
  state.notes.notes[state.notes.selectedNote]?.body;

export const notes = (state: RootState) => state.notes.notes;

export const selectedNote = (state: RootState) => state.notes.selectedNote;

export const version = (state: RootState) => state.notes.version;

export const {
  titleChange,
  bodyChange,
  noteChange,
  addNote,
  removeNote,
  setVersion,
} = notesSlice.actions;

export default notesSlice.reducer;
