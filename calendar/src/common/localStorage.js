import dummyEvents from './dummyEvents.json';

export const initializeEvents = () => {
    const storedEvents = localStorage.getItem('savedEvents');
    const parsedEvents = storedEvents ? JSON.parse(storedEvents) : dummyEvents;
    return parsedEvents;
}
