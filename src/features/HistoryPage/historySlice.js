import { createSlice } from '@reduxjs/toolkit';
import API from 'api/';

const historySlice = createSlice({
  name: 'history',
  initialState: {
    error: false,
    isFetching: false,
    builds: [],
  },
  reducers: {
    getBuildsRequest(state) {
      state.error = false;
      state.isFetching = true;
    },
    getBuildsSuccess(state, action) {
      state.isFetching = false;
      const { payload } = action;
      state.builds.push(...payload);
    },
    getBuildsFailure(state) {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getBuildsRequest,
  getBuildsSuccess,
  getBuildsFailure,
} = historySlice.actions;

export default historySlice.reducer;

export const getBuilds = () => async (dispatch) => {
  API.getBuilds({
    onRequest: () => dispatch(getBuildsRequest()),
    onSuccess: (data) => dispatch(getBuildsSuccess(data)),
    onFailure: () => dispatch(getBuildsFailure()),
  });
};
