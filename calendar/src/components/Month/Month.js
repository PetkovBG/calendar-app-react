import React from 'react';
import styles from './Month.module.css';
import Day from '../Day/Day';

const Month = ({ month }) => {
    return (
        <div className={styles['month-container']}>
            {month.map((row, i) => (
                <React.Fragment key={i}>
                    {row.map((day, index) => (
                        <Day day={day} key={index} />
                    ))}
                </React.Fragment>
            ))}
        </div>
    );
}

export default Month;