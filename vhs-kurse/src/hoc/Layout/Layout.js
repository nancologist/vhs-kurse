import React, {Component, Fragment} from 'react';
import AppHeader from "../../components/AppHeader/AppHeader";
import Courses from "../../containers/Courses/Courses";
import styles from './CorusesLayout.module.css';

class Layout extends Component {
    render() {
        return (
            <Fragment>
                <AppHeader/>

                {/* SideDrawer */}

                <main className={styles.Main}>
                    <Courses/>
                </main>
            </Fragment>
        );
    }
}

export default Layout;