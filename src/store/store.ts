import { configureStore } from '@reduxjs/toolkit';
import UIModeReducer from './reducer/UIMode';

export default configureStore({
    reducer: {
        UIMode: UIModeReducer
    }
})