import { combineReducers } from '@reduxjs/toolkit';

import historyReducer from 'features/HistoryPage/historySlice';
import repoSettingsReducer from 'features/MainPage/repoSettingsSlice';

export default combineReducers({
  history: historyReducer,
  settings: repoSettingsReducer,
});
