import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";
import { getMonth } from "../common/common";

const initialStateValues = {
    monthIndex: dayjs().month(),
    currentMonth: getMonth(),
    miniCalendarMonth: null,
    selectedDay: dayjs(),
    showModal: false,
}

const appSlice = createSlice({
    name: 'appContext',
    initialState: initialStateValues,
    reducers: {
        setMonthIndex(state, action) {
            const index = action.payload;
            state.monthIndex = index;
        },
        setCurrentMonth(state, action) {
            const month = action.payload;
            state.currentMonth = getMonth(month);
        },
        setMiniCalendarMonth(state, action) {
            const month = action.payload;
            state.miniCalendarMonth = month;
        },
        setSelectedDay(state, action) {
            const selectedDay = action.payload;
            state.selectedDay = selectedDay;
        },
        setShowModal(state, action) {
            const boolean = action.payload;
            state.showModal = boolean;
        }
 
    }
});

export const appActions = appSlice.actions;
export default appSlice.reducer;