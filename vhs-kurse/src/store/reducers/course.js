import * as util from '../../util/util';

const initialState = {
    courses: [],
    filteredCourses: [],
    activeFilters: [],
    coursesBackup: [],
    loading: true,
    amount: 100,
    accessible: false,
};

// Wenn ich Accessible ausschalte , dann gucke ich ob in activeFilters was gibt

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
            activeFilters: [],
        }
    }

    if (action.type === 'FILTER_ACCESSIBLE_COURSES') {
        if (action.accessible) {
            if (state.coursesBackup.length > 0) {
                return getAccessibleCourses(state, 'coursesBackup');
            } else if (state.filteredCourses.length > 0) {
                return getAccessibleCourses(state, 'filteredCourses');
            } else {
                return getAccessibleCourses(state, 'courses');
            }
        } else {
            return {
                ...state,
                filteredCourses: [],
                amount: state.courses.length,
                accessible: false,
            };
        }
    }

    if (action.type === 'FILTER_PRICE_RANGE') {
        if (state.coursesBackup.length > 0) {
            return getCoursesInPriceRange(state, 'coursesBackup', action.priceRange);
        } else if (state.filteredCourses.length > 0) {
            return getCoursesInPriceRange(state, 'filteredCourses', action.priceRange);
        } else {
            return getCoursesInPriceRange(state, 'courses', action.priceRange);
        }
    }

    return state;
};

const getAccessibleCourses = (state, courseArr) => {
    const filteredCourses = state[courseArr].filter(course => {
        return course.veranstaltungsort.barrierefrei === 'true';
    });

    return {
        ...state,
        filteredCourses: filteredCourses,
        coursesBackup: [...state[courseArr]],
        activeFilters: [...state.activeFilters, {type:'accessible'}],
        amount: filteredCourses.length,
        accessible: true,
    };
};

const getCoursesInPriceRange = (state, courseArr, priceRange) => {
    console.log(priceRange);
    const [range1, range2] = priceRange;
    const updatedCourses = state[courseArr].filter(course => {
        return +course.preis.betrag >= range1 && +course.preis.betrag <= range2;
    });

    return {
        ...state,
        filteredCourses: updatedCourses,
        coursesBackup: [...state[courseArr]],
        activeFilters: [...state.activeFilters, {type: 'priceRange', min: range1, max: range2}],
        amount: updatedCourses.length,
    };
};

export default reducer;