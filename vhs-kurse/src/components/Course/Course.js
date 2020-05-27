import React from "react";
import Styles from './Course.module.css';

const Course = (props) => {
    return (
        <div className={Styles.Card}>
            <h3>{props.title} <small>#{props.id}</small></h3>
            <p>{props.caption}</p>
            <strong>{props.price} €</strong>
        </div>
    );
};

export default Course;

// TODO: Add Image to Course. (Maybe using Fontawesome!)