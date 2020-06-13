import * as util from '../../util/util';

const initialState = {
    courses: [],
    filteredCourses: [],
    searchFilters: [],
    coursesBackup: [],
    loading: true,
    amount: 10,
    accessible: false,
};

// Wenn ich Accessible ausschalte , dann gucke ich ob in searchFilters was gibt

// Vielleicht vor dem Accessible ON/OFF wurde schon Preise geändert... dann gucken wir if(!filtereCourses)

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
            amount: updatedCourses.length,
            loading: false,
            filteredCourses: [],
            searchFilters: [],
        }
    }

    if (action.type === 'FILTER_ACCESSIBLE_COURSES') {
        console.log(state.coursesBackup);
        if (action.accessible) {
            if (state.filteredCourses.length > 0) {
                return getAccessibleCourses(state, 'filteredCourses');
            } else {
                return getAccessibleCourses(state, 'courses');
            }
        } else {
            const updatedSearchFilters = state.searchFilters.filter(
                searchFilter => searchFilter.type !== 'accessible'
            );
            return {
                ...state,
                filteredCourses: [...state.coursesBackup],
                searchFilters: updatedSearchFilters,
                amount: state.coursesBackup.length,
                accessible: false,
            };
        }
    }

    if (action.type === 'FILTER_PRICE_RANGE') {
        const [min, max] = action.priceRange;
        const prevRange = state.searchFilters.find(filter => filter.type === 'priceRange');
        console.log(prevRange);
        if (prevRange && (prevRange.min > min || prevRange.max < max)) {
            return getCoursesInPriceRange(state, 'coursesBackup', action.priceRange);
        }
        if (state.filteredCourses.length > 0) {
            return getCoursesInPriceRange(state, 'filteredCourses', action.priceRange);
        } else {
            return getCoursesInPriceRange(state, 'courses', action.priceRange);
        }
    }

    return state;
};

const getAccessibleCourses = (state, courseArr) => {
    const updatedCourses = state[courseArr].filter(course => {
        return course.veranstaltungsort.barrierefrei === 'true';
    });

    return {
        ...state,
        filteredCourses: updatedCourses,
        coursesBackup: [...state[courseArr]],
        searchFilters: [...state.searchFilters, {type:'accessible'}],
        amount: updatedCourses.length,
        accessible: true,
    };
};

const getCoursesInPriceRange = (state, courseArr, priceRange) => {
    const [range1, range2] = priceRange;
    const updatedCourses = state[courseArr].filter(course => {
        return +course.preis.betrag >= range1 && +course.preis.betrag <= range2;
    });

    return {
        ...state,
        filteredCourses: updatedCourses,
        coursesBackup: [...state[courseArr]],
        searchFilters: [...state.searchFilters, {type: 'priceRange', min: range1, max: range2}],
        amount: updatedCourses.length,
    };
};

export default reducer;