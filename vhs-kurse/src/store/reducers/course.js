import * as util from '../../util/util';

const initialState = {
    courses: [],
    loading: true,
    amount: 100,
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

    return state;
};

export default reducer;