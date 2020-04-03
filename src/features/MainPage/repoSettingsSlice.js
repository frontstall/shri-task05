import { createSlice } from '@reduxjs/toolkit';

import API from 'api';

const repoSettings = createSlice({
  name: 'settings',
  initialState: {
    isFetching: false,
    error: false,
    name: null,
    id: null,
  },
  reducers: {
    getRepoSettingsRequest(state) {
      state.error = false;
      state.isFetching = true;
    },
    getRepoSettingsFailure(state) {
      state.isFetching = false;
      state.error = true;
    },
    getRepoSettingsSuccess(state, action) {
      state.isFetching = false;
      state.name = action.payload.repoName;
      state.id = action.payload.id;
    },
  },
});

export const {
  getRepoSettingsRequest,
  getRepoSettingsFailure,
  getRepoSettingsSuccess,
} = repoSettings.actions;

export default repoSettings.reducer;

export const getRepoSettings = () => async (dispatch) => {
  API.getRepoSettings({
    onRequest: () => dispatch(getRepoSettingsRequest()),
    onSuccess: (data) => dispatch(getRepoSettingsSuccess(data)),
    onError: () => dispatch(getRepoSettingsFailure()),
  });
};
