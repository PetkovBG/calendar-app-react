import styles from './MiniCalendar.module.css';
import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { getMonth } from '../../common/common';

import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import { appActions } from '../../store/appContext';

const MiniCalendar = () => {

    const dispatch = useDispatch();

    const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month());
    const [currentMonth, setCurrentMonth] = useState(getMonth());

    const monthIndex = useSelector(state => state.appContext.monthIndex);
    const miniCalendarMonth = useSelector(state => state.appContext.miniCalendarMonth);
    let selectedDay = useSelector(state => state.appContext.selectedDay);

    let currentDay = '';

    const getCurrentDay = (day) => {
        currentDay = day.format("DD-MM-YY");
        return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY");
    }


    useEffect(() => {
        setCurrentMonthIndex(monthIndex);
    }, [monthIndex]);

    useEffect(() => {
        setCurrentMonth(getMonth(currentMonthIndex))
    }, [currentMonthIndex])

    useEffect(() => {
        if (miniCalendarMonth !== null) {
            dispatch(appActions.setMonthIndex(miniCalendarMonth));
        }
    }, [miniCalendarMonth]);

    const handlePreviousMonth = () => {
        setCurrentMonthIndex(currentMonthIndex - 1);
    }

    const handleNextMonth = () => {
        setCurrentMonthIndex(currentMonthIndex + 1);
    }

    const handleMiniCalendarMonthChange = () => {
        dispatch(appActions.setMiniCalendarMonth(currentMonthIndex));
    };

    const handleSelectedDay = (day) => {
        dispatch(appActions.setSelectedDay(day));
    }

    return (
        <div className={styles['mini-calendar-wrapper']}>
            <header className={styles['mini-calendar-header']}>
                <p className={styles['mini-calendar-text']}>
                    {dayjs(new Date(dayjs().year(), currentMonthIndex)).format("MMMM YYYY")}
                </p>
                <div className={styles['btn-wrapper']}>
                    <button className={styles['arrow']} onClick={handlePreviousMonth}>
                        <span className='material-icons-outlined arrow-span'>
                            chevron_left
                        </span>
                    </button>
                    <button className={styles['arrow']} onClick={handleNextMonth} >
                        <span className='material-icons-outlined'>
                            chevron_right
                        </span>
                    </button>
                </div>

            </header>
            <div className={styles['mini-calendar-display']}>
                {currentMonth[0].map((day, i) => (
                    <span key={i} className={styles['display-span']}>
                        {day.format('dd').charAt(0)}
                    </span>
                ))}
                {currentMonth.map((row, index) => (
                    <React.Fragment key={index}>
                        {row.map((day, idx) => {
                            const isCurrentDay = getCurrentDay(day);
                            let formattedDay = '';
                            if (selectedDay) {
                                formattedDay = selectedDay.format("DD-MM-YY")
                            }
                            const selectedClass = currentDay === formattedDay ? 'selected' : '';
                            // console.log('selectedClass', selectedClass);
                            const dayBtnClass = isCurrentDay ? styles['display-btn-current'] : styles['display-btn'];
                            const combinedClass = `${dayBtnClass}-${selectedClass}`;
                            // console.log('combinedClass', combinedClass);
                            return (<button key={idx}   className={`${dayBtnClass} ${selectedClass === 'selected' ? styles.selected : ''}`}
                            onClick={() => {
                                handleMiniCalendarMonthChange()
                                handleSelectedDay(day)
                            }}>
                                <span>{day.format('D')}</span>
                            </button>
                            )
                        })}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default MiniCalendar;