import React, {Fragment} from "react";
import styles from "./Home.module.css";
import {Link} from 'react-router-dom';

const home = (props) => {
    return (
        <Fragment>
            <div className={styles.cover}>
                <div className={styles.coverDarkener}>
                    <div className={styles.container}>
                        <h1>Kurse der Berliner Volkshochschulen</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consectetur distinctio dolor eaque maiores mollitia pariatur quis tenetur totam, voluptatum!</p>
                        <Link to="/courses">Zu Kursen</Link>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default home;