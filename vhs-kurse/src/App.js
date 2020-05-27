import React, {Component} from 'react';
import axios from 'axios';

import styles from './App.module.css';
import Courses from "./components/Courses/Courses";

class App extends Component {
    state = {
        courses: []
    };

    componentDidMount() {
        axios.get('https://vhs-kurse.firebaseio.com/veranstaltungen/veranstaltung.json')
            .then(data => console.log(data));
    }

    render() {
        const courses = this.state.courses;

        return (
            <div className={styles.App}>
                {/* Header */}

                {/* SideDrawer */}

                <main>
                    <Courses
                        courses={courses}
                    />
                </main>
            </div>
        );
    }
}

export default App;
