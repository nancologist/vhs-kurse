import React, {Component, Fragment} from 'react';
import AppHeader from "../../components/AppHeader/AppHeader";
import Courses from "../../containers/Courses/Courses";
import styles from './Layout.module.css';
import Search from "../../containers/Search/Search";

class Layout extends Component {
    render() {
        return (
            <Fragment>
                <AppHeader/>
                <div className={styles.container}>
                    <aside>
                        <Search/>
                    </aside>
                    <main>
                        <Courses/>
                    </main>
                </div>
            </Fragment>
        );
    }
}

export default Layout;