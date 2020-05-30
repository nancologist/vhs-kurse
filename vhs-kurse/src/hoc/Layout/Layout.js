import React, {Component, Fragment} from 'react';
import AppHeader from "../../components/AppHeader/AppHeader";

import styles from './Layout.module.css';
import Courses from "../../containers/Courses/Courses";

class Layout extends Component {
    render() {
        return (
            <Fragment>
                <AppHeader/>

                {/* SideDrawer */}

                <main className={styles.Main}>
                    <Courses/>
                    {this.props.children}
                </main>
            </Fragment>
        );
    }
}

export default Layout;
