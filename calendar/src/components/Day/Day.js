import dayjs from 'dayjs';
import styles from './Day.module.css';

import { useDispatch } from 'react-redux';
import { appActions } from '../../store/appContext';

const Day = ({ day, rowIndex }) => {

    const dispatch = useDispatch();

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