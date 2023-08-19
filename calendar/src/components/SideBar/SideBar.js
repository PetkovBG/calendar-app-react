import CreateEvent from '../CreateEvent/CreateEvent';
import styles from './SideBar.module.css';

const SideBar = () => {
    return (
        <aside className={styles['sidebar-aside']}>
            <CreateEvent />
        </aside>
    );
}

export default SideBar;