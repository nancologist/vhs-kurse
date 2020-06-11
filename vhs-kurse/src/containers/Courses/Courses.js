import React, {Component} from "react";
import CourseCard from "../../components/Course/CourseCard";
import Spinner from "../../components/UiComponents/Spinner/Spinner";
import {connect} from 'react-redux';

class Courses extends Component {
    // constructor(props) {
    //     super(props);
    //     // this.getData();
    // }

    // state = {
    //     courses: [],
    //     loading: true,
    // };

    // This function will be moved to Redux:
    // getData = () => {
    //     axios.get('https://vhs-kurse.firebaseio.com/veranstaltungen/veranstaltung.json?orderBy="$key"&limitToFirst=100')
    //         .then(res => {
    //             let updatedCourses = res.data;
    //             updatedCourses = updatedCourses.map( course => {
    //                 return {
    //                     ...course,
    //                     beginn_datum: this.randomStartDate(),
    //                 }
    //             });
    //             this.setState({courses: updatedCourses, loading: false});
    //         })
    //         .catch(err => {
    //             console.log(err);
    //             this.setState({loading: false})
    //         });
    // };

    formatStartDate = (startDate) => {
        // "2021-04-21"
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

        let toRenderCourses = this.props.courses;
        if (this.props.filteredCourses.length > 0) {
            toRenderCourses = this.props.filteredCourses;
        }

        return (
            toRenderCourses.map(course => {
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

const mapStateToProps = (state) => {
    return {
        courses: state.courseReducer.courses,
        filteredCourses: state.courseReducer.filteredCourses,
        loading: state.courseReducer.loading,
    };
};

export default connect(mapStateToProps)(Courses);
