import React, {Component} from "react";
import CourseCard from "../../components/Course/CourseCard";
import axios from "axios";
import Spinner from "../../components/UiComponents/Spinner/Spinner";

class Courses extends Component {
    constructor() {
        super(Component);
        this.getData();
    }

    state = {
        courses: [],
        loading: true,
    };

    // This function will be moved to Redux:
    getData = () => {
        axios.get('https://vhs-kurse.firebaseio.com/veranstaltungen/veranstaltung.json?orderBy="$key"&limitToFirst=100')
            .then(res => {
                let updatedCourses = res.data;
                updatedCourses = updatedCourses.map( course => {
                    console.log(typeof course.preis.betrag);
                    return {
                        ...course,
                        beginn_datum: this.randomStartDate(),
                    }
                });
                this.setState({courses: updatedCourses, loading: false});
            })
            .catch(err => {
                console.log(err);
                this.setState({loading: false})
            });
    };

    // This Function will be moved to Redux:
    randomStartDate = () => {
        let day = Math.floor(Math.random() * 28) + 1;
        day = day < 10 ? "0" + day : day;

        let month = [Math.floor(Math.random() * 12)];
        month = month < 10 ? "0" + month : month;

        const year = ['2021', '2022', '2023'][Math.floor(Math.random() * 3)];

        return `${year}-${month}-${day}`;
    };

    formatStartDate = (startDate) => {
        // "2021-04-21"
        const monthNames = [
            'Januar', 'Februar', 'März',
            'April', 'Mai', 'Juni',
            'Juli', 'August', 'September',
            'Oktober', 'November', 'Dezember'
        ];

        const day = startDate.split('-')[1];
        const year = startDate.split('-')[0];
        const monthNumber = startDate.split('-')[1];
        const monthName = monthNames[Number.parseInt(monthNumber)];

        return `${day} ${monthName} ${year}`;
    };

    formatNumberInGerman = (num) => {
        if (num.includes('.')) {
            return num.replace('.', ',')
        }
        return num;
    };

    render() {
        if (this.state.loading) {
            return (
                <Spinner/>
            );
        }

        return (
            this.state.courses.map(course => {
                // const desc = course.text.find(text => text.eigenschaft === 'Beschreibung').text;
                return (
                    <CourseCard
                        key={course.guid}
                        id={course.guid}
                        title={course.name}
                        caption={course.untertitel}

                        price={this.formatNumberInGerman(course.preis.betrag)}
                        startDate={this.formatStartDate(course.beginn_datum)}

                        schoolName={course.veranstaltungsort.name}
                        postalCode={course.veranstaltungsort.adresse.plz}
                        city={course.veranstaltungsort.adresse.ort}
                        street={course.veranstaltungsort.adresse.strasse}
                    />
                );
            })
        );
    }
}

export default Courses;
