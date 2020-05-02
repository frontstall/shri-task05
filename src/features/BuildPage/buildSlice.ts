import { createSlice } from '@reduxjs/toolkit';

import assign from 'lodash/assign';

import API from 'api';

import { TAppDispatch } from '../..';

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

export const getBuildDetails = (id?: string) => async (dispatch: TAppDispatch) => {
  API.getBuildDetails({
    onRequest: () => dispatch(getBuildDetailsRequest()),
    onSuccess: (data) => dispatch(getBuildDetailsSuccess(data)),
    onError: () => dispatch(getBuildDetailsFailure()),
    id,
  });
};

export const getBuildLog = (id?: string) => async (dispatch: TAppDispatch) => {
  API.getBuildLog({
    onRequest: () => dispatch(getBuildLogRequest()),
    onSuccess: (data) => dispatch(getBuildLogSuccess(data)),
    onError: () => dispatch(getBuildLogFailure()),
    id,
  });
};
