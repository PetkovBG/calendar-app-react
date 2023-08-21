import styles from './EventModal.module.css';

import { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { appActions } from '../../store/appContext';
import { useSelector } from 'react-redux';
import { eventActions } from '../../store/events';

const labelsEnum = ['gray', 'green', 'blue', 'red', 'purple'];

const EventModal = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [selectedLabel, setSelectedLabel] = useState(labelsEnum[0]);

    const dispatch = useDispatch();

    const selectedDay = useSelector(state => state.appContext.selectedDay);
    const savedEvents = useSelector(state => state.eventContext);
    console.log('savedE', savedEvents);

    const handleCloseModal = () => {
        dispatch(appActions.setShowModal(false));
    }

    const handleAddEvent = (eventObj) => {
        dispatch(eventActions.addEvent(eventObj))
    }

    // console.log('valueOf', selectedDay.valueOf());

    // useEffect(() => {
    //     const parsedEvents = initializeEvents();
    //     // Update your Redux state with parsedEvents using an action
    //     // dispatch(yourAction(parsedEvents));
    // }, []); // Empty dependency array to run the effect only once

    // useEffect(() => {
    //     localStorage.setItem('savedEvents', JSON.stringify(savedEvents));
    // }, [savedEvents]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const calendarEvent = {
            title,
            description,
            label: selectedLabel,
            day: selectedDay.valueOf(),
            id: Date.now(),
        }
        handleAddEvent(calendarEvent);
        handleCloseModal();
        // localStorage.setItem('savedEvents', JSON.stringify(savedEvents));
    }

    return (
        <div className={styles['modal-overlay']}>
            <form onSubmit={handleSubmit} className={styles['modal-form']}>
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
                    <button type='submit' className={styles['footer-btn']}>
                        Save
                    </button>
                </footer>
            </form>
        </div>
    );
}

export default EventModal;