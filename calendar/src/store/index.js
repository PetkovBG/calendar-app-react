import { configureStore } from '@reduxjs/toolkit';
import appSliceReducer from './appContext';
import eventSliceReducer from './events';
import selectedReducer from './selectedEvent';
import labelReducer from './labels';

const store = configureStore({
    reducer: {
        appContext: appSliceReducer,
        eventContext: eventSliceReducer,
        selectedContext: selectedReducer,
        labelContext: labelReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;