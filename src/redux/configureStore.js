import { configureStore } from '@reduxjs/toolkit';
import charSlice from './Dragons/characterSlice';

const store = configureStore({
  reducer: {
    characters: charSlice,
  },
});

export default store;
