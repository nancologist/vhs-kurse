import React from "react";
import Course from "./Course/Course";

const Courses = props =>
    props.courses.map(course => (
        <Course
            key={course.id}
            id={course.id}
            title={course.title}
            desc={course.desc}
            price={course.price}
        />
    ));

export default Courses;