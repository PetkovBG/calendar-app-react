import styles from './EventModal.module.css';

import { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { appActions } from '../../store/appContext';
import { useSelector } from 'react-redux';
import { eventActions } from '../../store/events';
import { selectedActions } from '../../store/selectedEvent';

const labelsEnum = ['gray', 'green', 'blue', 'red', 'purple'];

const EventModal = () => {

    const selectedDay = useSelector(state => state.appContext.selectedDay);
    const selectedEvent = useSelector(state => state.selectedContext.selectedEvent);

    const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : '');
    const [description, setDescription] = useState(selectedEvent ? selectedEvent.description : '');
    const [selectedLabel, setSelectedLabel] = useState(
        selectedEvent ? labelsEnum.find((label) => label === selectedEvent.label) :
            labelsEnum[0]);

    const dispatch = useDispatch();


    const handleCloseModal = () => {
        dispatch(selectedActions.resetSelectedEvent());
        dispatch(appActions.setShowModal(false));
    }

    const handleAddEvent = (eventObj) => {
        dispatch(eventActions.addEvent(eventObj))
    }

    const handleUpdateEvent = (eventObj) => {
        dispatch(eventActions.updateEvent(eventObj));
    }

    const handleDeleteEvent = (eventObj) => {
        let confirm = window.confirm('Are you sure you want to delete this record?');
        if(confirm) {
            dispatch(eventActions.deleteEvent(eventObj));
        } else {
            return;
        }
    }

    const resetSelectedEvent = () => {
        dispatch(selectedActions.resetSelectedEvent());
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const calendarEvent = {
            title,
            description,
            label: selectedLabel,
            day: selectedDay.valueOf(),
            id: selectedEvent ? selectedEvent.id : Date.now(),
        }

        if (selectedEvent) {
            handleUpdateEvent(calendarEvent)
            resetSelectedEvent();
        } else {
            handleAddEvent(calendarEvent)
        }

        handleCloseModal();
    }

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (event.target.classList.contains(styles['modal-overlay'])) {
                dispatch(selectedActions.resetSelectedEvent());
                handleCloseModal();
            }
        };

        const handleKeyPress = (event) => {
            if (event.key === 'Escape') {
                dispatch(selectedActions.resetSelectedEvent());
                handleCloseModal();
            }
        };

        document.addEventListener('keydown', handleKeyPress);
        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return (
        <div className={styles['modal-overlay']}>
            <form onSubmit={handleSubmit} className={styles['modal-form']}>
                <header className={styles['modal-header']}>
                    <span className='material-icons-outlined'>
                        drag_handle
                    </span>
                    <div>
                        {selectedEvent && (
                            <span onClick={() => {
                                handleDeleteEvent(selectedEvent)
                                handleCloseModal()
                                resetSelectedEvent()
                            }} className='material-icons-outlined'>
                                delete
                            </span>
                        )}
                        <button onClick={handleCloseModal}>
                            <span className='material-icons-outlined'>
                                close
                            </span>
                        </button>
                    </div>

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