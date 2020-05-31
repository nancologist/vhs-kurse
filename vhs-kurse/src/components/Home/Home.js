import React, {Fragment} from "react";
import styles from "./Home.module.css";

const home = (props) => {
    return (
        <Fragment>
            <div className={styles.cover}>
                <div className={styles.coverDarkener}>
                    <div className={styles.container}>
                        <h1>Kurse der Berliner Volkshochschulen</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consectetur distinctio dolor eaque maiores mollitia pariatur quis tenetur totam, voluptatum!</p>
                        <a href="/courses">Zu Kursen</a>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default home;