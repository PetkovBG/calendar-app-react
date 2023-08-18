import styles from './Header.module.css';
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <header className={styles['header-calendar']}>
            <img src={logo} alt="calendar-logo" className={styles['calendar-logo']} />
            <h1 className={styles['header-headline']}>Calendar</h1>
            <button className={styles['header-btn']}>
            Today
            </button>
            <button>
                <span className='material-icons-outlined cursor-pointer text-white'>
                    chevron_left
                </span>
            </button>
        </header>
       
    );
}

export default Header;