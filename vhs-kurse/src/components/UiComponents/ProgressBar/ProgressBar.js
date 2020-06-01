import React from "react";
import styles from './ProgressBar.module.css';

const ProgressBar = (props) => {
    return (
        <div>
            <div className={styles.progressInput}>
                {/*<label htmlFor="progressInput"></label>*/}
                <input id="progressInput" type="number"/>
            </div>
            <div className={styles.progressBar}>
                <button className={styles.progressBtn}/>
            </div>
        </div>
    );
};

export default ProgressBar;