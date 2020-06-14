import React from "react";
import styles from './CourseCard.module.css';

const CourseCard = (props) => {
    return (
        <div className={styles.card}>
            <div className={[styles.cardTitle, styles.hrLine].join(' ')}>
                <h3>{props.title}</h3>
                <small>{props.caption}</small>
            </div>
            <div className={styles.courseImage}>
                <small>Hier kommt das Kursbild.</small>
            </div>
            <div className={styles.coursePreview}>
                <ul>
                    <li>
                        <strong>Beginn:</strong> {props.startDate}
                    </li>
                    <li>
                        <strong>Ort:</strong> {props.schoolName} | {props.postalCode} {props.city}
                    </li>
                    <li>
                        <strong>Preis:</strong> {props.price} €
                    </li>
                </ul>
            </div>
            <div className={styles.cardCtrl}>
                <button>Mehr</button>
                <button>Hinzufügen</button>
            </div>
        </div>
    );
};

export default CourseCard;

// TODO: Add Image to Course. (Maybe using Fontawesome!)