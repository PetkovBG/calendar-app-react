import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";
import { getMonth } from "../common/common";

const initialStateValues = {
    monthIndex: dayjs().month(),
    currentMonth: getMonth(),
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
        // setCurrentMonth(state, action) {
        //     const currentMonth = action.payload;
        //     console.log('getM', getMonth())
        //     state.currentMonth.push(getMonth());
        // }
    }
});

export const appActions = appSlice.actions;
export default appSlice.reducer;