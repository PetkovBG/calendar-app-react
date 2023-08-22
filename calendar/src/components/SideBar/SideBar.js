import CreateEvent from '../CreateEvent/CreateEvent';
import Labels from '../Labels/Labels';
import MiniCalendar from '../MiniCalendar/MiniCalendar';
import styles from './SideBar.module.css';

const SideBar = () => {
    return (
        <aside className={styles['sidebar-aside']}>
            <CreateEvent />
            <MiniCalendar />
            <Labels />
        </aside>
    );
}

export default SideBar;