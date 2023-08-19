import { configureStore } from '@reduxjs/toolkit';
import appSliceReducer from './appContext';


const store = configureStore({
    reducer: {
        appContext: appSliceReducer,
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;