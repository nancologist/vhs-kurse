import React, {useRef} from "react";
import styles from './ProgressBar.module.css';

const ProgressBar = (props) => {
    const progressBtnEl = useRef(null);
    const inputChangeHandler = (event) => {
        const progressBtnX = Math.ceil(event.target.value / 2.087);
        progressBtnEl.current.style.transform = `translate(${progressBtnX}%, -36%)`
    };

    return (
        <div>
            <div className={styles.progressInput}>
                <input
                    id="progressInput"
                    type="number"
                    min="0"
                    max="1878"
                    onChange={inputChangeHandler}
                />
            </div>
            <div className={styles.progressBar}>
                <button
                    ref={progressBtnEl}
                    className={styles.progressBtn}
                />
            </div>
        </div>
    );
};

export default ProgressBar;