import { combineReducers } from '@reduxjs/toolkit';

import historyReducer from 'features/HistoryPage/historySlice';
import repoSettingsReducer from 'features/MainPage/repoSettingsSlice';
import modalReducer from 'features/Modal/modalSlice';

export default combineReducers({
  history: historyReducer,
  modal: modalReducer,
  settings: repoSettingsReducer,
});
