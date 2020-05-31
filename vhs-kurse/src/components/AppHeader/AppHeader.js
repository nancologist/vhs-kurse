import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../../assets/logo01.png';
import styles from './AppHeader.module.css';

const appHeader = (props) => {
    return (
        <header>
            <nav>
                <div className={styles.logoContainer}>
                    <img src={logo} alt="VHS Kurse - Logo"/>
                </div>
                <ul className={styles.navList}>
                    <li>
                        <NavLink
                            activeClassName={styles.active}
                            exact
                            to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink
                            activeClassName={styles.active}
                            exact
                            to="/courses">Kurse</NavLink>
                    </li>
                    <li>
                        <NavLink
                            activeClassName={styles.active}
                            exact
                            to="/login">Einloggen</NavLink>
                    </li>
                    <li>
                        <NavLink
                            activeClassName={styles.active}
                            exact
                            to="/sign-up">Anmelden</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default appHeader;