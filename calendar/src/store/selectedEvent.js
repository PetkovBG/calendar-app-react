import { createSlice } from "@reduxjs/toolkit";

const selectedSlice = createSlice({
    name: 'selectedContext',
    initialState: { selectedEvent: null },
    reducers: {
        setSelectedEvent(state, action) {
            const event = action.payload;
            state.selectedEvent = event;
        },
        resetSelectedEvent(state) {
            state.selectedEvent = null;
        }
    }
})

export const selectedActions = selectedSlice.actions;
export default selectedSlice.reducer;