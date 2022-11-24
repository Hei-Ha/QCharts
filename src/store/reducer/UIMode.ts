import { createSlice } from '@reduxjs/toolkit';

export const UIModeSlice = createSlice({
    name: 'UIMode',
    initialState: {
        value: 'light'
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

const {switchUiToDark, switchUIToLight} = UIModeSlice.actions;

const getUIModeSlice = (state: { UIMode: { value: 'dark' | 'light'; }; }) => state.UIMode.value;

export {
    switchUiToDark,
    switchUIToLight,
    getUIModeSlice
}

export default UIModeSlice.reducer;