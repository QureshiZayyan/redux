import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './counterSlice'
import { nameReducer } from './nameSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        changename: nameReducer,
    }
});
