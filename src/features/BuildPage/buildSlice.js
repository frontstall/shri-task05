import { createSlice } from '@reduxjs/toolkit';

import assign from 'lodash/assign';

import API from 'api';

const buildSlice = createSlice({
  name: 'build',
  initialState: {
    error: false,
    isFetching: false,
    isLogFetching: false,
    buildLog: '',
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
    getBuildLogRequest(state) {
      state.isLogFetching = true;
      state.error = false;
    },
    getBuildLogSuccess(state, { payload }) {
      state.isLogFetching = false;
      state.buildLog = payload;
    },
    getBuildLogFailure(state) {
      state.isLogFetching = false;
      state.error = true;
    },
  },
});

export const {
  getBuildDetailsRequest,
  getBuildDetailsSuccess,
  getBuildDetailsFailure,
  getBuildLogRequest,
  getBuildLogSuccess,
  getBuildLogFailure,
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

export const getBuildLog = (id) => async (dispatch) => {
  API.getBuildLog({
    onRequest: () => dispatch(getBuildLogRequest()),
    onSuccess: (data) => dispatch(getBuildLogSuccess(data)),
    onFailure: () => dispatch(getBuildLogFailure()),
    id,
  });
};
