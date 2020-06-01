import React from "react";
import styles from './CourseCard.module.css';

const CourseCard = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardTitle}>
                <h3>{props.title}s</h3>
            </div>
            <div className={styles.courseImage}></div>
            <div className={styles.coursePreview}>
                <p>{props.caption}</p>
                <strong>{props.price} €</strong>
            </div>
            <div className={styles.cardCtrl}>
                <p>Mehr</p>
                <p>Hinzufügen</p>
            </div>
        </div>
    );
};

export default CourseCard;

// TODO: Add Image to Course. (Maybe using Fontawesome!)