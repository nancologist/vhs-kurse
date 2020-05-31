import React, {Fragment} from "react";
import AppHeader from "../AppHeader/AppHeader";
import styles from './error404.module.css';

const error404 = () => (
    <Fragment>
        <AppHeader/>
        <div className={styles.notFound}>
            <h1>Page Not Found.</h1>
        </div>
    </Fragment>
);

export default error404;