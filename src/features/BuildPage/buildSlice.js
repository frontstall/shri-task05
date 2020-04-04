import { createSlice } from '@reduxjs/toolkit';

import assign from 'lodash/assign';

import API from 'api';

const buildSlice = createSlice({
  name: 'build',
  initialState: {
    error: false,
    isFetching: false,
    buildLog: 'buildLog',
  },
  reducers: {
    getBuildDetailsRequest(state) {
      state.error = false;
      state.isFetching = true;
    },
    getBuildDetailsSuccess(state, action) {
      state.isFetching = false;
      const { payload } = action;
      assign(state, payload);
    },
    getBuildDetailsFailure(state) {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getBuildDetailsRequest,
  getBuildDetailsSuccess,
  getBuildDetailsFailure,
} = buildSlice.actions;

export default buildSlice.reducer;

export const getBuildDetails = (id) => async (dispatch) => {
  API.getBuildDetails({
    onRequest: () => dispatch(getBuildDetailsRequest()),
    onSuccess: (data) => dispatch(getBuildDetailsSuccess(data)),
    onFailure: () => dispatch(getBuildDetailsFailure()),
    id,
  });
};
