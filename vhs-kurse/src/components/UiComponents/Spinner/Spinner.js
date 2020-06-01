import React from "react";
import styles from './Spinner.module.css';

const Spinner = (props) => {
    return (
        <div className={styles.loaderContainer}>
            <div className={styles.loader}>Loading ...</div>
        </div>
    );
};

export default Spinner;