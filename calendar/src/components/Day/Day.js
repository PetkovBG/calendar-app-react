import dayjs from 'dayjs';
import styles from './Day.module.css';

const Day = ({ day, rowIndex }) => {

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
        </div>
    );
}

export default Day;