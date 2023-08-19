import CreateEvent from '../CreateEvent/CreateEvent';
import MiniCalendar from '../MiniCalendar/MiniCalendar';
import styles from './SideBar.module.css';

const SideBar = () => {
    return (
        <aside className={styles['sidebar-aside']}>
            <CreateEvent />
            <MiniCalendar />
        </aside>
    );
}

export default SideBar;