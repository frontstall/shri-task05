import merge from 'lodash/merge';

import { createSlice } from '@reduxjs/toolkit';
import API, { IBuild } from 'api';
import { TAppDispatch } from 'index';

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
      const { payload }: { payload: Array<IBuild> } = action;
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

export const getBuilds = (offset = 0) => async (dispatch: TAppDispatch) => {
  API.getBuilds({
    onRequest: () => dispatch(getBuildsRequest()),
    onSuccess: (data: Array<IBuild>) => dispatch(getBuildsSuccess(data)),
    onError: () => dispatch(getBuildsFailure()),
    offset,
  });
};
