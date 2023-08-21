import { useEffect } from "react";

export const initializeEvents = () => {
    const storedEvents = localStorage.getItem('savedEvents');
    const parsedEvents = storedEvents ? JSON.parse(storedEvents) : [];
    return parsedEvents;
}

//TODO - use useEffect in component
// get savedEvents with useSelector
//trying to implement it in the Month component now - Aug 21

// useEffect(() => {
// localStorage.setItem('savedEvents', JSON.stringify(savedEvents))
// }, [savedEvents])