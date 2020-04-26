import { combineReducers } from '@reduxjs/toolkit';

import buildReducer from 'features/BuildPage/buildSlice';
import historyReducer from 'features/HistoryPage/historySlice';
import repoSettingsReducer from 'features/MainPage/repoSettingsSlice';
import modalReducer from 'features/Modal/modalSlice';

const rootReducer = combineReducers({
  build: buildReducer,
  history: historyReducer,
  modal: modalReducer,
  settings: repoSettingsReducer,
});

export type TRootState = ReturnType<typeof rootReducer>

export default rootReducer;
