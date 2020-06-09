import React, {useState} from "react";
import styles from './CourseAmountFilter.module.css';

const CourseAmountFilter = (props) => {
    return (
        <div>
            <div className={styles.progressInput}>
                <label htmlFor="progressInput">Anz. Ergebnisse</label>
                <input
                    id="progressInput"
                    type="number"
                    min="0"
                    max="1878"
                    value={props.value}
                    onChange={props.changed}
                />
            </div>
            <div className={styles.progressBar}>
                <div
                    style={{
                        width: Math.ceil((props.value / 18.78)) + '%'
                    }}
                />
            </div>
        </div>
    );
};

export default CourseAmountFilter;