import { createSlice } from '@reduxjs/toolkit';

export const UIModeSlice = createSlice({
    name: 'UIMode',
    initialState: {
        value: 'night'
    },
    reducers: {
        switchUiToNight: (state) => {
            state.value = 'night'
        },
        switchUIToDay: (state) => {
            state.value = 'day'
        }
    }
})

export const {switchUiToNight, switchUIToDay} = UIModeSlice.actions;

export const getUIModeSlice = (state: { UIMode: { value: any; }; }) => state.UIMode.value

export default UIModeSlice.reducer;