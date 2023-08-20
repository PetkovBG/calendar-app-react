import styles from './EventModal.module.css';

import { useDispatch } from 'react-redux';
import { appActions } from '../../store/appContext';

const EventModal = () => {

    const dispatch = useDispatch();
    
    const handleCloseModal = () => {
        dispatch(appActions.setShowModal(false));
    }

    return (
        <div className={styles['modal-overlay']}>
            <form className={styles['modal-form']}>
                <header className={styles['modal-header']}>
                    <span className='material-icons-outlined'>
                        drag_handle
                    </span>
                    <button onClick={handleCloseModal}>
                        <span className='material-icons-outlined'>
                            close
                        </span>
                    </button>
                </header>
            </form>
        </div>
    );
}

export default EventModal;