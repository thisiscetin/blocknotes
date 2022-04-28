import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import moment from "moment";
import { v4 } from "uuid";

export interface NoteState {
  title: string;
  body: string;
  createdAt: number;
}

export interface NotesState {
  versionHistory: string[];
  selectedNote: number;
  notes: NoteState[];
}

const initialState: NotesState = {
  versionHistory: [v4()],
  selectedNote: 0,
  notes: [
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
      state.notes.push({
        title: "",
        body: "",
        createdAt: moment().unix(),
      });

      state.selectedNote = state.notes.length - 1;
    },
    removeNote: (state, action: PayloadAction<number>) => {
      state.notes.splice(action.payload, 1);
    },
  },
});

export const selectedTitle = (state: RootState) =>
  state.notes.notes[state.notes.selectedNote]?.title;

export const selectedBody = (state: RootState) =>
  state.notes.notes[state.notes.selectedNote]?.body;

export const notes = (state: RootState) => state.notes.notes;

export const selectedNote = (state: RootState) => state.notes.selectedNote;

export const versionHistory = (state: RootState) => state.notes.versionHistory;

export const { titleChange, bodyChange, noteChange, addNote, removeNote } =
  notesSlice.actions;

export default notesSlice.reducer;