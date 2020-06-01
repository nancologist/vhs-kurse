import React, {Component} from "react";
import CourseCard from "../../components/Course/CourseCard";
import axios from "axios";

class Courses extends Component {
    constructor() {
        super(Component);
        this.getData();
    }

    state = {
        courses: []
    };

    getData = () => {
        axios.get('https://vhs-kurse.firebaseio.com/veranstaltungen/veranstaltung.json?orderBy="$key"&limitToFirst=10')
            .then(res => this.setState({courses: res.data}));
    };

    render() {
        return (
            this.state.courses.map(course => {
                // const desc = course.text.find(text => text.eigenschaft === 'Beschreibung').text;
                return (
                    <CourseCard
                        key={course.guid}
                        id={course.guid}
                        title={course.name}
                        caption={course.untertitel}
                        price={course.preis.betrag}
                    />
                );
            })
        );
    }
};

export default Courses;