import { configureStore } from '@reduxjs/toolkit';
import appSliceReducer from './appContext';
import eventSliceReducer from './events';
import selectedReducer from './selectedEvent';


const store = configureStore({
    reducer: {
        appContext: appSliceReducer,
        eventContext: eventSliceReducer,
        selectedContext: selectedReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;