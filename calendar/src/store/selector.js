import { createSelector } from "@reduxjs/toolkit";

const selectedSavedEvents = state => state.eventContext;
const selectedLabels = state => state.labelContext.labels;

export const selectFilteredEvents = createSelector(
    [selectedSavedEvents, selectedLabels],
    (savedEvents, labels) => {
        const selectedLabels = labels.filter(lbl => lbl.checked).map(lbl => lbl.label);
        return savedEvents.filter(evt => selectedLabels.includes(evt.label));
    }
)