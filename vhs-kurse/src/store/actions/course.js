import actionTypes from './actionTypes';
import axios from "axios";

export const fetchCourses = (amount) => {
    axios.get(`https://vhs-kurse.firebaseio.com/veranstaltungen/veranstaltung.json?orderBy="$key"&limitToFirst=${amount}`)
        .then(res => {
            let updatedCourses = res.data;
            updatedCourses = updatedCourses.map( course => {
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