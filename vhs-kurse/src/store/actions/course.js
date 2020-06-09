import axios from "axios";

export const fetchCourses = (amount) => {
    return (dispatchAction) => {
        axios.get('https://vhs-kurse.firebaseio.com/veranstaltungen/' +
            'veranstaltung.json?orderBy="$key"&limitToFirst=' + amount)
            .then(res => {
                const fetchedCourses = res.data;
                dispatchAction(fetchCoursesSuccess(fetchedCourses));
            })
            .catch(err => {
                console.log(err);
                // this.setState({loading: false})
            });
    };
};

// Actions ++++++++++++++++++++++++++++++++++++++++

const fetchCoursesSuccess = (fetchedCourses) => {
    return {
        type: 'FETCH_COURSES',
        fetchedCourses: fetchedCourses,
    };
};