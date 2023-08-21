import React from 'react';
import styles from './Month.module.css';
import Day from '../Day/Day';
import { useEffect } from 'react';

import { useSelector } from 'react-redux';

const Month = ({ month }) => {

    // const savedEvents = useSelector(state => state.eventContext);
    // console.log('savedEvents - Month', savedEvents);

    // useEffect(() => {
    //     localStorage.setItem('savedEvents', savedEvents);
    //     console.log('useEffect - month');
    // }, savedEvents);

    return (
        <div className={styles['month-container']}>
            {month.map((row, i) => (
                <React.Fragment key={i}>
                    {row.map((day, index) => (
                        <Day day={day} key={index} rowIndex={i} />
                    ))}
                </React.Fragment>
            ))}
        </div>
    );
}

export default Month;