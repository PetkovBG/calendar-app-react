import styles from './CreateEvent.module.css';
import plusSVG from '../../assets/plus.svg'

import { useDispatch } from 'react-redux';
import { appActions } from '../../store/appContext';

const CreateEvent = () => {

    const dispatch = useDispatch();

    const handleShowModal = () => {
        dispatch(appActions.setShowModal(true));
    }

    return(
        <button onClick={handleShowModal} className={styles['create-event-btn']}>
            <img src={plusSVG} alt="create-btn" className={styles['create-event-img']} />
            <span className={styles['create-event-text']}>Create</span>
        </button>
    );
}

export default CreateEvent;