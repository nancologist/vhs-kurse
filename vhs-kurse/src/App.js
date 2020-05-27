import React, {Component} from 'react';
import Course from './components/Courses/Course/Course';
import styles from './App.module.css';

class App extends Component {
    state = {
        // courses: [
        //     {
        //         id: 1,
        //         title: 'Schwimmkurs',
        //         desc: 'Schwimmen in 10 Tagen lernen!',
        //         price: 12,
        //     },
        //     {
        //         id: 2,
        //         title: 'Math',
        //         desc: 'Mathe in 10 Tagen lernen!',
        //         price: 15,
        //     }
        // ]

        course: {
            id: 1,
            title: 'Schwimmkurs',
            desc: 'Schwimmen in 10 Tagen lernen!',
            price: 12,
        },
    };

    render() {
        const course = this.state.course;

        return (
            <div className={styles.App}>
                {/* Header */}

                {/* SideDrawer */}

                <main>
                    <Course
                        id={course.id}
                        title={course.title}
                        desc={course.desc}
                        price={course.price}
                    />
                </main>
            </div>
        );
    }
}

export default App;
