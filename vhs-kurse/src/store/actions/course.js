import axios from "axios";

export const fetchCourses = (amount = 100) => {
    return (dispatchAction) => {
        axios.get('https://vhs-kurse.firebaseio.com/veranstaltungen/' +
            'veranstaltung.json?orderBy="$key"&limitToFirst=' + amount)
            .then(res => {
                const fetchedCourses = res.data;
                dispatchAction((fetchedCourses) => {
                    return {
                        type: 'FETCH_COURSES',
                        fetchedCourses,
                    };
                });
            })
            .catch(err => {
                console.log(err);
                // this.setState({loading: false})
            });
    };
};

// const fetchCourses = (courses) => {
//     return {
//         type: 'FETCH_COURSES',
//         courses,
//     };
// };