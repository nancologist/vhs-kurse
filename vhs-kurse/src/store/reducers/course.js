import * as util from '../../util/util';

const initialState = {
    courses: [],
    loading: true,
    amount: 100,
    accessible: false,
};

const reducer = (state = initialState, action) => {
    if (action.type === 'FETCH_COURSES') {
        let updatedCourses = action.fetchedCourses;
        updatedCourses = updatedCourses.map( course => {
            return {
                ...course,
                beginn_datum: util.randomDate(),
            };
        });

        return {
            ...state,
            courses: updatedCourses,
            loading: false,
        }
    }

    if (action.type === 'FILTER_ACCESSIBLE_COURSES') {
        const prevCourses = state.courses;
        if (action.accessible) {
            const updatedCourses = state.courses.filter(course => {
                return course.veranstaltungsort.barrierefrei === 'true';
            });

            // console.log(updatedCourses.length);

            return {
                ...state,
                courses: updatedCourses,
                amount: updatedCourses.length,
            };
        }
    }

    return state;
};

export default reducer;