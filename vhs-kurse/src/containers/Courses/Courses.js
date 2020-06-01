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

    // This function will be moved to Redux:
    getData = () => {
        axios.get('https://vhs-kurse.firebaseio.com/veranstaltungen/veranstaltung.json?orderBy="$key"&limitToFirst=3')
            .then(res => {
                let updatedCourses = res.data;
                updatedCourses = updatedCourses.map( course => {
                    return {
                        ...course,
                        beginn_datum: this.randomDate(),
                    }
                });
                this.setState({courses: updatedCourses});
            });
    };

    // This Function will be moved to Redux:
    randomDate = () => {
        const day = Math.floor(Math.random() * 29) + 1;

        const month = [
            'Januar', 'Februar', 'März',
            'April', 'Mai', 'Juni',
            'Juli', 'August', 'September',
            'Oktober', 'November', 'Dezember'
        ][Math.floor(Math.random() * 12)].substr(0,3);

        const year = ['2021', '2022', '2023'][Math.floor(Math.random() * 3)];

        return `${day} ${month} ${year}`;
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
                        startDate={course.beginn_datum}

                        schoolName={course.veranstaltungsort.name}
                        postalCode={course.veranstaltungsort.adresse.plz}
                        city={course.veranstaltungsort.adresse.ort}
                        street={course.veranstaltungsort.adresse.strasse}
                    />
                );
            })
        );
    }
};

export default Courses;