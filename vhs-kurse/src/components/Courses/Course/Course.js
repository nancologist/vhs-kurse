import React from "react";
import Styles from './Course.module.css';

const Course = (props) => {
    return (
        <div className={Styles.Card}>
            <h3>Course Title</h3>
            <p>This is the description of the course.</p>
            <strong>10 €</strong>
        </div>
    );
};

export default Course;