import { configureStore } from '@reduxjs/toolkit';
import appSliceReducer from './appContext';


const store = configureStore({
    reducer: {
        appContext: appSliceReducer,
    }
});

export default store;