import { createSlice } from "@reduxjs/toolkit";

const labelSlice = createSlice({
    name: 'labelContext',
    initialState: { labels: [] },
    reducers: {
        setLabels(state, action) {
            const labels = action.payload.map((evt) => evt.label);
            const uniqueLabels = [...new Set(labels)];

            state.labels = uniqueLabels.map((label) => {
                const currentLabel = state.labels.find((lbl) => lbl.label === label);
                return {
                    label,
                    checked: currentLabel ? currentLabel.checked : true,
                };
            });
        },
        updateLabel(state, action) {
            const payloadLabel = action.payload.label;
            
            return {
                ...state,
                labels: state.labels.map((label => {
                    if(label.label === payloadLabel) {
                        return {...label, checked: !label.checked}
                    }
                    return label;
                }))
            }
        },
    }
});

export const labelActions = labelSlice.actions;
export default labelSlice.reducer;
