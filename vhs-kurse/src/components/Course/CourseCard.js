import React from "react";
import styles from './CourseCard.module.css';

const CourseCard = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.courseImage}></div>
            <div className={styles.coursePreview}>
                <h3>{props.title}s</h3>
                <p>{props.caption}</p>
                <strong>{props.price} €</strong>
                <div className={styles.cardCtrl}>
                    <p>Mehr</p>
                    <p>Hinzufügen</p>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;

// TODO: Add Image to Course. (Maybe using Fontawesome!)