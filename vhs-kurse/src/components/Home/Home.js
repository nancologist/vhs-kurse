import React from "react";
import styles from "./Home.module.css";

const home = (props) => {
    return (
        <div className={styles.cover}>
            <div className={styles.coverDarkener}></div>
        </div>
    );
};

export default home;