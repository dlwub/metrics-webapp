import { configureStore } from '@reduxjs/toolkit';
import questionsSlice from './Questions/Questions';

const store = configureStore({
  reducer: {
    questions: questionsSlice,
  },
});

export default store;
