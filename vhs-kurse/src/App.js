import React, {Component} from 'react';
import Course from './components/Courses/Course/Course';
import styles from './App.module.css';
import Courses from "./components/Courses/Courses";

class App extends Component {
    state = {
        courses: [
            {
                id: 1,
                title: 'Schwimmkurs',
                desc: 'Schwimmen in 10 Tagen lernen!',
                price: 12,
            },
            {
                id: 2,
                title: 'Math',
                desc: 'Mathe in 10 Tagen lernen!',
                price: 15,
            }
        ]
    };

    render() {
        return (
            <div className={styles.App}>
                {/* Header */}

                {/* SideDrawer */}

                <main>
                    <Courses
                        courses={this.state.courses}
                    />
                </main>
            </div>
        );
    }
}

export default App;
