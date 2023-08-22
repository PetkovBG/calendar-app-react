import dayjs from 'dayjs';
import styles from './Day.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { appActions } from '../../store/appContext';
import { selectedActions } from '../../store/selectedEvent';
import { labelActions } from '../../store/labels';
import { useEffect, useState } from 'react';
import { selectFilteredEvents } from '../../store/selector';



const Day = ({ day, rowIndex }) => {

    const [dayEvents, setDayEvents] = useState([]);

    const dispatch = useDispatch();

    const filteredEvents = useSelector(selectFilteredEvents);

    const savedEvents = useSelector(state => state.eventContext);
    const handleSetLabels = (savedEvents) => {
        dispatch(labelActions.setLabels(savedEvents))
    }

    useEffect(() => {
        const events = filteredEvents.filter(event => dayjs(event.day).format('DD-MM-YY') === day.format('DD-MM-YY'));
        setDayEvents(events)
    }, [filteredEvents, day])


    useEffect(() => {
        handleSetLabels(savedEvents);
    }, [savedEvents])

    const handleSelectedDay = (e, day) => {
        const eventContent = e.target.textContent;
        if (!eventContent) {
            dispatch(selectedActions.resetSelectedEvent());
        }
        dispatch(appActions.setSelectedDay(day))
    }

    const handleShowModal = (boolean) => {
        dispatch(appActions.setShowModal(boolean));
    }

    const getCurrentDay = () => {
        return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY");
    }

    const handleSelectedEvent = (eventObj) => {
        dispatch(selectedActions.setSelectedEvent(eventObj))
    }

    const dayParagraphClass = getCurrentDay() ? styles['day-paragraph-current'] : styles['day-paragraph'];

    return (
        <div className={styles['day-container']}>
            <header className={styles['day-header']}>
                {rowIndex === 0 && (
                    <p className={styles['weekday-paragraph']}>
                        {day.format('ddd')}
                    </p>)}
                <p className={`${dayParagraphClass}`}>
                    {day.format('DD')}
                </p>
            </header>
            <div className={styles['day-box']} onClick={(e) => {
                handleSelectedDay(e, day)
                handleShowModal(true)
            }}>
                {dayEvents.map((evt, i) => (
                    <div className={styles[`${evt.label}-event-container`]} key={i} onClick={() => handleSelectedEvent(evt)}>
                        {evt.title}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Day;