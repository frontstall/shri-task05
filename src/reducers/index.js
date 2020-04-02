import { combineReducers } from '@reduxjs/toolkit';

import historyReducer from 'features/HistoryPage/historySlice';

export default combineReducers({
  history: historyReducer,
});
