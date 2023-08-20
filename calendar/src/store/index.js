import { configureStore } from '@reduxjs/toolkit';
import appSliceReducer from './appContext';
import eventSliceReducer from './events';


const store = configureStore({
    reducer: {
        appContext: appSliceReducer,
        eventContext: eventSliceReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;