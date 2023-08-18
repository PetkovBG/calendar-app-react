import styles from './Header.module.css';
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <header className={styles['header-calendar']}>
            <img src={logo} alt="calendar-logo" className={styles['calendar-logo']} />
            <h1 className={styles['header-headline']}>Calendar</h1>
            <button className={styles['btn-header']}>
                Today
            </button>
            <button className={styles['btn-secondary']}>
                <span className='material-icons-outlined cursor-pointer text-white'>
                    chevron_left
                </span>
            </button>
            <button className={styles['btn-secondary']}>
                <span className='material-icons-outlined cursor-pointer text-white'>
                    chevron_right
                </span>
            </button>
        </header>

    );
}

export default Header;