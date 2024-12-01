import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tname: 'j',
}

export const nameSlice = createSlice({
    name: 'changename',
    initialState,
    reducers: {
        convert: (state) => {
            state.tname = 'jjhjgh'
        },
        updateName: (state, action) => {
            state.tname += action.payload; // Update the `name` property with new value from payload
        },
    },
});

export const { updateName, convert } = nameSlice.actions;
export const nameReducer = nameSlice.reducer;