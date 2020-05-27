import React from "react";
import Styles from './CourseCard.module.css';

const CourseCard = (props) => {
    return (
        <div className={Styles.Card}>
            <h3>{props.title} <small>#{props.id}</small></h3>
            <p>{props.caption}</p>
            <strong>{props.price} €</strong>
            <div>
                <button></button>
            {/* Add "Detail"-btn and "Add-to-Cart"-icon/btn */}
            </div>
        </div>
    );
};

export default CourseCard;

// TODO: Add Image to Course. (Maybe using Fontawesome!)