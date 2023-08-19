import styles from './CreateEvent.module.css';
import plusSVG from '../../assets/plus.svg'

const CreateEvent = () => {
    return(
        <button className={styles['create-event-btn']}>
            <img src={plusSVG} alt="create-btn" className={styles['create-event-img']} />
            <span className={styles['create-event-text']}>Create</span>
        </button>
    );
}

export default CreateEvent;