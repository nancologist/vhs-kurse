import React, {Component} from 'react';
import axios from 'axios';

import styles from './App.module.css';
import Courses from "./containers/Courses/Courses";

class App extends Component {
    render() {
        return (
            <div className={styles.App}>
                {/* Header */}

                {/* SideDrawer */}

                <main>
                    <Courses/>
                </main>
            </div>
        );
    }
}

export default App;
