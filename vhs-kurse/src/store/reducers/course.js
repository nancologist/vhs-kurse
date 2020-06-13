import * as util from '../../util/util';

const initialState = {
    courses: [],
    filteredCourses: [],
    searchFilters: [],
    loading: true,
    amount: 100,
    accessible: false,
};

const reducer = (state = initialState, action) => {
    if (action.type === 'FETCH_COURSES') {
        const updatedCourses = action.fetchedCourses.map( course => {
            return {
                ...course,
                beginn_datum: util.randomDate(),
            };
        });
        return {
            ...state,
            courses: updatedCourses,
            filteredCourses: updatedCourses,
            amount: updatedCourses.length,
            loading: false,
            searchFilters: [],
        }
    }

    if (action.type === 'BARRIER_FREE') {
        let courses;
        if (action.barrierFree) {
            courses = state.courses.filter(course => course.veranstaltungsort.barrierefrei === 'true');
        } else {
            courses = state.courses;
        }
        const [updatedCourses, updatedSearchFilters] = updateCoursesAndSearchFilters(state, courses, action);
        return {
            ...state,
            filteredCourses: updatedCourses,
            searchFilters: updatedSearchFilters,
            amount: updatedCourses.length,
            accessible: action.barrierFree,
        };
    }

    if (action.type === 'PRICE_RANGE') {
        const {min, max} = action.priceRange;
        const courses = state.courses.filter(course => {
            return +course.preis.betrag >= min && +course.preis.betrag <= max;
        });
        const [updatedCourses, updatedSearchFilters] = updateCoursesAndSearchFilters(state, courses, action);
        return {
            ...state,
            filteredCourses: updatedCourses,
            searchFilters: updatedSearchFilters,
            amount: updatedCourses.length,
        };
    }

    return state;
};

// const searchFilters = [
//     {
//         type: 'BARRIER_FREE',
//         isBarrierFree: true, // or false
//     },
//     {
//         type: 'PRICE_RANGE',
//         range: {
//             min: 5,
//             max: 10,
//         }
//     }
// ];

const updateCoursesAndSearchFilters = (state, updatedCourses, action) => {
    const updateSearchFilters = state.searchFilters.filter(searchFilter => searchFilter.type !== action.type);
    updateSearchFilters.forEach(searchFilter => {
        if (searchFilter.type === 'BARRIER_FREE' && searchFilter.value) {
            updatedCourses = updatedCourses.filter(course => course.veranstaltungsort.barrierefrei === 'true');
        }
        if (searchFilter.type === 'PRICE_RANGE') {
            const {min, max} = searchFilter.priceRange;
            updatedCourses = updatedCourses.filter(course => {
                return +course.preis.betrag >= min && +course.preis.betrag <= max;
            });
        }
    });

    if (action.type === 'BARRIER_FREE') {
        updateSearchFilters.push({
            type: action.type,
            value: action.barrierFree,
        });
    } else if (action.type === 'PRICE_RANGE') {
        updateSearchFilters.push({
            type: action.type,
            priceRange: action.priceRange,
        });
    }
    return [updatedCourses, updateSearchFilters];
};

export default reducer;