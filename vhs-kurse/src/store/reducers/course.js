import * as util from '../../util/util';

const initialState = {
    courses: [],
    filteredCourses: [],
    loading: true,
    amount: 100,
    accessible: false,
};

const reducer = (state = initialState, action) => {
    if (action.type === 'FETCH_COURSES') {
        let filteredCourses = action.fetchedCourses;
        filteredCourses = filteredCourses.map( course => {
            return {
                ...course,
                beginn_datum: util.randomDate(),
            };
        });

        return {
            ...state,
            courses: filteredCourses,
            loading: false,
        }
    }

    if (action.type === 'FILTER_ACCESSIBLE_COURSES') {
        if (action.accessible) {
            const filteredCourses = state.courses.filter(course => {
                return course.veranstaltungsort.barrierefrei === 'true';
            });

            return {
                ...state,
                filteredCourses: filteredCourses,
                amount: filteredCourses.length,
                accessible: true,
            };
        } else {
            return {
                ...state,
                filteredCourses: [],
                amount: state.courses.length,
                accessible: false,
            };
        }
    }

    return state;
};

export default reducer;