import styles from './Day.module.css';

const Day = ({ day, rowIndex }) => {
    return (
        <div className={styles['day-container']}>
            <header className={styles['day-header']}>
                {rowIndex === 0 && (
                    <p className={styles['weekday-paragraph']}>
                        {day.format('ddd')}
                    </p>)}
                <p className={styles['day-paragraph']}>
                    {day.format('DD')}
                </p>
            </header>
        </div>
    );
}

export default Day;