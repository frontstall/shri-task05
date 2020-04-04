import { combineReducers } from '@reduxjs/toolkit';

import buildReducer from 'features/BuildPage/buildSlice';
import historyReducer from 'features/HistoryPage/historySlice';
import repoSettingsReducer from 'features/MainPage/repoSettingsSlice';
import modalReducer from 'features/Modal/modalSlice';

export default combineReducers({
  build: buildReducer,
  history: historyReducer,
  modal: modalReducer,
  settings: repoSettingsReducer,
});
