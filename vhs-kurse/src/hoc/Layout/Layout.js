import React, {Component, Fragment} from 'react';

import styles from './Layout.module.css';
import Courses from "../../containers/Courses/Courses";

class Layout extends Component {
    render() {
        return (
            <Fragment>
                {/* Header - TODO NOW! Add Cart NavItem and Page */}

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
