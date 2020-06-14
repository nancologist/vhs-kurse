import React, {Component} from "react";
import CourseCard from "../../components/CourseCard/CourseCard";
import Spinner from "../../components/UiComponents/Spinner/Spinner";
import {connect} from 'react-redux';

class Courses extends Component {
    formatStartDate = (startDate) => {
        const monthNames = [
            'Januar', 'Februar', 'März',
            'April', 'Mai', 'Juni',
            'Juli', 'August', 'September',
            'Oktober', 'November', 'Dezember'
        ];

        const day = startDate.split('-')[2];
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
        if (this.props.loading) {
            return (
                <Spinner/>
            );
        }

        return (
            this.props.filteredCourses.length > 0 ?
                this.props.filteredCourses.map(course => {
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
                }) :
                <h2>Kein Ergebnis für diese Suche!</h2>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filteredCourses: state.courseReducer.filteredCourses,
        loading: state.courseReducer.loading,
    };
};

export default connect(mapStateToProps)(Courses);
