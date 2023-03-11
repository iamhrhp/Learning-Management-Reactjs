import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { DataReducer } from '../reducer/reducer';

const rootreducer = combineReducers({
  DataReducer: DataReducer,
});

export const store = configureStore({
  reducer: rootreducer,
});
