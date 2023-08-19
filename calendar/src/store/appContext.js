import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const initialStateValues = {
    monthIndex: dayjs().month(),
}

const appSlice = createSlice({
    name: 'appContext',
    initialState: initialStateValues,
    reducers: {
        setMonthIndex(state, action) {
            const index = action.payload;
            state.monthIndex = index;
        }
    }
});

export const appActions = appSlice.actions;
export default appSlice.reducer;