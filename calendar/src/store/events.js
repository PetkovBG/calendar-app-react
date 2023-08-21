import { createSlice } from "@reduxjs/toolkit";
import { initializeEvents } from "../common/localStorage";

const initialStateValues = [];

const persistedEvents = initializeEvents();

const eventSlice = createSlice({
    name: 'eventContext',
    initialState: persistedEvents,
    reducers: {
        addEvent(state, action) {
            console.log('addEvent', action.payload);
            // state = [...state, action.payload];
            state.push(action.payload);
            // state.push(action.payload); //TODO - check which way works better to update the state
            console.log('state', state);
            localStorage.setItem('savedEvents', JSON.stringify(state));
        },
        updateEvent(state, action) {
            const updatedEvent = action.payload;
            state = state.map(event => event.id === updatedEvent.id ? updatedEvent : event);
        },
        deleteEvent(state, action) {
            const id = action.payload.id;
            state = state.filter(event => event.id !== id);
        },
        getEvents(state) {
            return state;
        }
    }
})

export const eventActions = eventSlice.actions;
export default eventSlice.reducer;