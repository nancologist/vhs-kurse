import React from "react";
import Course from "./Course/Course";

const Courses = props => {
    return (
        props.courses.map(course => {
            const desc = course.text.find(text => text.eigenschaft === 'Beschreibung').text;
            return (
                <Course
                    key={course.guid}
                    id={course.guid}
                    title={course.name}
                    caption={course.untertitel}
                    price={course.preis.betrag}
                />
            );
        })
    );
};

export default Courses;