import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface SnapShot {
  version: string;
  ipfsHash: string;
  takenAt: number;
}

export interface SyncState {
  isSyncing: boolean;
  snapshotHistory: SnapShot[];
}

const initialState: SyncState = {
  isSyncing: false,
  snapshotHistory: [],
};

export const syncSlice = createSlice({
  name: "sync",
  initialState,
  reducers: {
    syncStart: (state) => {
      state.isSyncing = true;
    },
    syncStop: (state) => {
      state.isSyncing = false;
    },
    takeSnapshot: (state, action: PayloadAction<SnapShot>) => {
      state.snapshotHistory.push(action.payload);
    },
  },
});

export const isSyncing = (state: RootState) => state.sync.isSyncing;

export const { syncStart, syncStop, takeSnapshot } = syncSlice.actions;

export default syncSlice.reducer;
