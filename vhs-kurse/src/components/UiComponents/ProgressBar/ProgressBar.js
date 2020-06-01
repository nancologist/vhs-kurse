import React, {useRef} from "react";
import styles from './ProgressBar.module.css';

const ProgressBar = (props) => {
    const progressEl = useRef(null);
    const inputChangeHandler = (event) => {
        const width = Math.ceil(event.target.value / 18.78);
        progressEl.current.style.width = width + '%';
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
                <div ref={progressEl}></div>
            </div>
        </div>
    );
};

export default ProgressBar;