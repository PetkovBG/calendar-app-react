import styles from './EventModal.module.css';

import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { appActions } from '../../store/appContext';
import { useSelector } from 'react-redux';

const labelsEnum = ['gray', 'green', 'blue', 'red', 'purple'];

const EventModal = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [selectedLabel, setSelectedLabel] = useState(labelsEnum[0]);

    const dispatch = useDispatch();

    const selectedDay = useSelector(state => state.appContext.selectedDay);

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
                        <span className='material-icons-outlined'>
                            schedule
                        </span>
                        <p>{selectedDay.format("dddd, MMMM DD")}</p>
                        <span className='material-icons-outlined'>
                            segment
                        </span>
                        <input type='text' name='description' placeholder='Add description' className={styles['form-description']} required value={description} onChange={(e) => setDescription(e.target.value)} />
                        <span className='material-icons-outlined'>
                            bookmark_border
                        </span>
                        <div className='label-container'>
                            {labelsEnum.map(((label, i) => (
                                <span key={i} onClick={() => setSelectedLabel(label)} className={styles[label]}>
                                    {selectedLabel === label &&
                                        <span className='material-icons-outlined'>
                                            check
                                        </span>
                                    }
                                </span>
                            )))}
                        </div>
                    </div>
                </div>
                        <footer className={styles['modal-footer']}>
                            <button className={styles['footer-btn']}>
                                Save
                            </button>
                        </footer>
            </form>
        </div>
    );
}

export default EventModal;