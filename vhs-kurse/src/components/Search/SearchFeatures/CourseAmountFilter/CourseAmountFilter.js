import React, {useRef, useState} from "react";
import styles from './CourseAmountFilter.module.css';

const CourseAmountFilter = (props) => {
    const [inputVal, setInputValue] = useState(props.courseAmount);
    const inputChangeHandler = (event) => {
        let value = Number.parseInt(event.target.value);
        if (value > 1878) {
            value = 1878
        }
        setInputValue(value);
        const width = Math.ceil(value / 18.78);
    };

    return (
        <div>
            <div className={styles.progressInput}>
                <label htmlFor="progressInput">Anz. Ergebnisse</label>
                <input
                    id="progressInput"
                    type="number"
                    min="0"
                    max="1878"
                    value={inputVal}
                    onChange={inputChangeHandler}
                />
            </div>
            <div className={styles.progressBar}>
                <div
                    style={{
                        width: (inputVal / 18.78) + '%'
                    }}
                />
            </div>
        </div>
    );
};

export default CourseAmountFilter;