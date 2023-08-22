import { createSlice } from "@reduxjs/toolkit";
import { initializeEvents } from "../common/localStorage";

const persistedEvents = initializeEvents();

const eventSlice = createSlice({
    name: 'eventContext',
    initialState: persistedEvents,
    reducers: {
        addEvent(state, action) {
            state.push(action.payload);
            localStorage.setItem('savedEvents', JSON.stringify(state));
        },
        updateEvent(state, action) {
            const updatedEvent = action.payload;
            state = state.map(event => event.id === updatedEvent.id ? updatedEvent : event);
            localStorage.setItem('savedEvents', JSON.stringify(state));
            return state;
        },
        deleteEvent(state, action) {
            const id = action.payload.id;
            state = state.filter(event => event.id !== id);
            localStorage.setItem('savedEvents', JSON.stringify(state));
            return state;
        },
        getEvents(state) {
            return state;
        }
    }
})

export const eventActions = eventSlice.actions;
export default eventSlice.reducer;