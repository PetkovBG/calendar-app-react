import styles from './MiniCalendar.module.css';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { getMonth } from '../../common/common';

const MiniCalendar = () => {

    const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month());
    const [currentMonth, setCurrentMonth] = useState(getMonth());

    useEffect(() => {
        setCurrentMonth(getMonth(currentMonthIndex))
    }, [currentMonthIndex])

    return (
        <div className={styles['mini-calendar-wrapper']}>
            <header className={styles['mini-calendar-header']}>
            <p className={styles['mini-calendar-text']}>
                {dayjs(new Date(dayjs().year(), currentMonthIndex)).format("MMMM YYYY")}
            </p>
            <button className={styles['arrow']}>
                <span className='material-icons-outlined arrow-span'>
        chevron_left
                </span>
            </button>
            <button className={styles['arrow']}>
                <span className='material-icons-outlined'>
        chevron_right
                </span>
            </button>
            </header>
        </div>
    );
}

export default MiniCalendar;