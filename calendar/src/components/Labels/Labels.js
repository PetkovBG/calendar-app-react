import React from 'react';
import styles from './Labels.module.css';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { labelActions } from '../../store/labels';

const Labels = () => {

    const dispatch = useDispatch();

    const labels = useSelector(state => state.labelContext.labels);

    const toggleLabel = (labelObj) => {
        dispatch(labelActions.updateLabel(labelObj));
    }

    return (
        <React.Fragment>
            <p className={styles['label-p']}>
                Label
            </p>
            {labels.map(({ label: lbl, checked }, i) => {
                const lblColor = lbl;
                return (

                    <label key={i} className={styles['label-lbl']} htmlFor={i} >
                        <input type='checkbox' id={i} checked={checked} 
                        className={styles[`${lblColor}-input`]} 
                        onClick={() => toggleLabel({label: lbl, checked})}
                        />
                        <span className={styles['label-span']}>{lbl}</span>
                    </label>
                )
            })}
        </React.Fragment>
    );
}

export default Labels;