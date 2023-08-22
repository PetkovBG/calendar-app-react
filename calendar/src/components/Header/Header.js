import styles from './Header.module.css';
import logo from '../../assets/logo.png';
import dayjs from 'dayjs';

import { useDispatch } from 'react-redux';
import { appActions } from '../../store/appContext';
import { useSelector } from 'react-redux/es/hooks/useSelector';


const Header = () => {

    const monthIndex = useSelector(state => state.appContext.monthIndex);
    const dispatch = useDispatch();

    const setMonthToPrevious = () => {
        dispatch(appActions.setMonthIndex(monthIndex - 1));
    }

    const setMonthToNext = () => {
        dispatch(appActions.setMonthIndex(monthIndex + 1));
    }

    const hadnleReset = () => {
        dispatch(appActions.setMonthIndex(monthIndex === dayjs().month() ? monthIndex + Math.random() : dayjs().month()));
    }

    return (
        <header className={styles['header-calendar']}>
            <img src={logo} alt="calendar-logo" className={styles['calendar-logo']} />
            <h1 className={styles['header-headline']}>Calendar</h1>
            <button className={styles['btn-header']} onClick={hadnleReset}>
                Today
            </button>
            <button className={styles['btn-secondary']} onClick={setMonthToPrevious}>
                <span className='material-icons-outlined'>
                    chevron_left
                </span>
            </button>
            <button className={styles['btn-secondary']} onClick={setMonthToNext}>
                <span className='material-icons-outlined'>
                    chevron_right
                </span>
            </button>
            <h2 className={styles['heading-secondary']}>
                {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
            </h2>
        </header>

    );
}

export default Header;