// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import charitiesReducer from '../features/charities/charitiesSlice';
import registerReducer from './registerSlice'; // Import the register reducer

export const store = configureStore({
  reducer: {
    charities: charitiesReducer,
    register: registerReducer, 
  },
});
