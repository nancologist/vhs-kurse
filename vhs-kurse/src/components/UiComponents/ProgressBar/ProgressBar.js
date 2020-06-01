import React from "react";
import styles from './ProgressBar.module.css';

const ProgressBar = (props) => {
    return (
        <div>
            <button className={styles.progressBtn}></button>
            <div className={styles.progressBar}>Stange...</div>
        </div>
    );
};

export default ProgressBar;