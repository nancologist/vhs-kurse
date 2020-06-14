import React, {Fragment} from "react";
import styles from "./Home.module.css";
import {Link} from 'react-router-dom';
import AppHeader from "../AppHeader/AppHeader";

const home = (props) => {
    return (
        <Fragment>
            <div className={styles.cover}>
                <div className={styles.coverOverlay}>
                    <AppHeader isHome/>
                    <div className={styles.container}>
                        <h1>Kurse der Berliner Volkshochschulen</h1>
                        <p>
                            In unserem Portal kannst du durch mehr als 1500 Kursangebote Berliner Volkshochschulen
                            deinen Kursen finden, dich anmelden und die Kursgebühr ganz einfach überweisen. Wenn du
                            Fragen hast, kannst du uns rund um die Uhr schreiben!
                        </p>
                        <Link to="/courses" className={styles.btn}>Zu Kursen</Link>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default home;