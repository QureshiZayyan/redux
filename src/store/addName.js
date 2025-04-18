import { createSlice } from "@reduxjs/toolkit";

const NameSlice = createSlice({
    name: 'names',
    initialState: {
        value: '',
    },
    reducers: {
        addText: (state) => {
            state.value = 'zayyan';
        },
    },
});

export const { addText } = NameSlice.actions;
export default NameSlice.reducer;