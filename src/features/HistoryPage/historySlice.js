import merge from 'lodash/merge';

import { createSlice } from '@reduxjs/toolkit';
import API from 'api';

const historySlice = createSlice({
  name: 'history',
  initialState: {
    error: false,
    isFetching: false,
    builds: {},
  },
  reducers: {
    getBuildsRequest(state) {
      state.error = false;
      state.isFetching = true;
    },
    getBuildsSuccess(state, action) {
      state.isFetching = false;
      const { payload } = action;
      const builds = payload.reduce((acc, build) => ({ ...acc, [build.id]: build }), {});
      state.builds = merge(state.builds, builds);
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

export const getBuilds = (offset = 0) => async (dispatch) => {
  API.getBuilds({
    onRequest: () => dispatch(getBuildsRequest()),
    onSuccess: (data) => dispatch(getBuildsSuccess(data)),
    onFailure: () => dispatch(getBuildsFailure()),
    offset,
  });
};
