import { createSlice } from '@reduxjs/toolkit';

const historySlice = createSlice({
  name: 'history',
  initialState: {
    error: false,
    isFetching: false,
    builds: [],
  },
  reducers: {
    addBuilds(state, action) {
      state.error = false;
      state.isFetching = false;
      const { payload } = action;
      state.builds.push(...payload);
    },
  },
});

export const { addBuilds } = historySlice.actions;

export default historySlice.reducer;
