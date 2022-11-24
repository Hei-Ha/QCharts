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

const {switchUiToNight, switchUIToDay} = UIModeSlice.actions;

const getUIModeSlice = (state: { UIMode: { value: any; }; }) => state.UIMode.value

export {
    switchUiToNight,
    switchUIToDay,
    getUIModeSlice
}

export default UIModeSlice.reducer;