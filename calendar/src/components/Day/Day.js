import dayjs from 'dayjs';
import styles from './Day.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { appActions } from '../../store/appContext';
import { eventActions } from '../../store/events';
// import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useEffect } from 'react';
import { initializeEvents } from '../../common/localStorage';

const Day = ({ day, rowIndex }) => {

    const dispatch = useDispatch();

    const savedEvents = useSelector(state => state.eventContext);
    // console.log('daySavedEvents', savedEvents);

    let latestEvents = '';
    // const events = initializeEvents();

    
    useEffect(() => {
        // latestEvents = dispatch(eventActions.getEvents());
        // const events = initializeEvents();
        console.log('useE', savedEvents);
    }, [savedEvents])

    // console.log('latestEvents', latestEvents);
    // console.log('daySavedEvents', savedEvents);

    const handleSelectedDay = () => {
        dispatch(appActions.setSelectedDay(day))
    }

    const handleShowModal = (boolean) => {
        dispatch(appActions.setShowModal(boolean));
    }

    const getCurrentDay = () => {
        return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY");
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
            <div className={styles['day-box']} onClick={() => {
                handleSelectedDay(day)
                handleShowModal(true)
            }}>
                    
            </div>
        </div>
    );
}

export default Day;