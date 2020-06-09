import axios from "axios";

const fetchCourses = (amount = 100) => {
    return (dispatchAction) => {
        axios.get('https://vhs-kurse.firebaseio.com/veranstaltungen/veranstaltung.json?orderBy="$key"&limitToFirst=${amount}')
            .then(res => {
                const fetchedCourses = res.data;
                dispatchAction((fetchedCourses) => {
                    return {

                    };
                });

                // let updatedCourses = res.data;
                // updatedCourses = updatedCourses.map( course => {
                //     return {
                //         ...course,
                //         beginn_datum: this.randomStartDate(),
                //     }
                // });
                // this.setState({courses: updatedCourses, loading: false});
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