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
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam beatae blanditiis deserunt dicta ducimus ipsam, minima perspiciatis sapiente, sunt ut voluptate? Animi at commodi, cum cumque deserunt dolor dolores esse harum ipsa ipsum laboriosam laudantium maxime neque nesciunt non nostrum odit optio pariatur, quisquam repudiandae suscipit tempora totam voluptatibus?</p>
                        <Link to="/courses">Zu Kursen</Link>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default home;