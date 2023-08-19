import styles from './MiniCalendar.module.css';
import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { getMonth } from '../../common/common';

import { useSelector } from 'react-redux';

const MiniCalendar = () => {

    const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month());
    const [currentMonth, setCurrentMonth] = useState(getMonth());

    const monthIndex = useSelector(state => state.appContext.monthIndex);

    useEffect(() => {
        setCurrentMonthIndex(monthIndex);
    }, [monthIndex]);

    useEffect(() => {
        setCurrentMonth(getMonth(currentMonthIndex))
    }, [currentMonthIndex])

    const handlePreviousMonth = () => {
        setCurrentMonthIndex(currentMonthIndex - 1);
    }

    const handleNextMonth = () => {
        setCurrentMonthIndex(currentMonthIndex + 1);
    }

    return (
        <div className={styles['mini-calendar-wrapper']}>
            <header className={styles['mini-calendar-header']}>
                <p className={styles['mini-calendar-text']}>
                    {dayjs(new Date(dayjs().year(), currentMonthIndex)).format("MMMM YYYY")}
                </p>
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
            </header>
            <div className={styles['mini-calendar-display']}>
                {currentMonth[0].map((day, i) => (
                    <span key={i} className={styles['display-span']}>
                        {day.format('dd').charAt(0)}
                    </span>
                ))}
                {currentMonth.map((row, index) => (
                    <React.Fragment key={index}>
                        {row.map((day, idx) => (
                            <button key={idx} className={styles['display-btn']}>
                                <span>{day.format('D')}</span>
                            </button>
                        ))}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default MiniCalendar;