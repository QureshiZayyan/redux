// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import nameReducer from './addName'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        names: nameReducer,
    },
});
