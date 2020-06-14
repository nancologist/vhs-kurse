/*
P11 TASK: DIE KOMPLIZIERTE LOGIK IST IN DER FUNCTION updateCoursesAndSearchFilters() ANGEWENDET.
 */

import * as util from '../../util/util';

const initialState = {
    courses: [], // The courses which are directly fetched from Database.
    filteredCourses: [], // The courses after applying filters by User.
    searchFilters: [], // Store the used filters by User (*** WICHTIG FÜR TASK P11 ***)
    loading: true,
    amount: 100,
    accessible: false,
};

const reducer = (state = initialState, action) => {
    // Set the fetched Courses from Database and Modify the "beginn_datum" of them.
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

    // When User switch on the "Barrierfrei" set only these Courses to State.
    if (action.type === 'BARRIER_FREE') {
        let courses;
        if (action.barrierFree) {
            // Applying Filter for all courses before recalling the other previous filters in LINE-44 with updateCoursesAndSearchFilters().
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

    // Set only Courses to State, which have prices between the selected range by User.
    if (action.type === 'PRICE_RANGE') {
        const {min, max} = action.priceRange;
        // Applying Filter for all courses before recalling the other previous filters in LINE-61 with updateCoursesAndSearchFilters().
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

    // If there's no sooner "return" of the updated States in this function, return the currentState:
    return state;
};

const updateCoursesAndSearchFilters = (state, updatedCourses, action) => {
    // Remove the data of a previously used filter, if this is the current filter.
    const updateSearchFilters = state.searchFilters.filter(searchFilter => searchFilter.type !== action.type);

    // Now Loop through the other previous applied filters to not loose those other filters:
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

    // Add the currently used filter to updatedSearchFilters Array, which later will be assigned to the State "searchFilters"
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