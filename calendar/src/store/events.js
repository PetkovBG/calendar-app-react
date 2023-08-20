import { createSlice } from "@reduxjs/toolkit";

const initialStateValues = [];

const eventSlice = createSlice({
    name: 'eventSlice',
    initialState: initialStateValues,
    reducers: {
        addevent(state, action) {
            state = [...state, action.payload];
        },
        updateEvent(state, action) {
            const updatedEvent = action.payload;
            state = state.map(event => event.id === updatedEvent.id ? updatedEvent : event);
        },
        deleteEvent(state, action) {
            const id = action.payload.id;
            state = state.filter(event => event.id !== id);
        }
    }
})

export const eventActions = eventSlice.actions;
export default eventSlice.reducer;