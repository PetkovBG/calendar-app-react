import styles from './EventModal.module.css';

import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { appActions } from '../../store/appContext';

const EventModal = () => {

    const [title, setTitle] = useState('');

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
                <div className={styles['modal-body']}>
                    <div className={styles['modal-grid']}>
                        <div></div>
                        <input type='text' name='title' placeholder='Add title' className={styles['form-title']} required value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default EventModal;