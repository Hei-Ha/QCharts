import { createSlice } from '@reduxjs/toolkit';

export const UIModeSlice = createSlice({
    name: 'UIMode',
    initialState: {
        value: 'dark'
    },
    reducers: {
        switchUiToDark: (state) => {
            state.value = 'dark'
        },
        switchUIToLight: (state) => {
            state.value = 'light'
        }
    }
})

export const {switchUiToDark, switchUIToLight} = UIModeSlice.actions;

export default UIModeSlice.reducer;