import styles from './EventModal.module.css';

const EventModal = () => {
    return (
        <div className={styles['modal-overlay']}>
            <form className={styles['modal-form']}>
                <header className={styles['modal-header']}>
                    <span className='material-icons-outlined'>
                        drag_handle
                    </span>
                    <button>
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