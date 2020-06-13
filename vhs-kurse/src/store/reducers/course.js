import * as util from '../../util/util';

const initialState = {
    courses: [],
    filteredCourses: [],
    activeFilters: [],
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
            loading: false,
            filteredCourses: [],
            activeFilters: [],
        }
    }

    if (action.type === 'FILTER_ACCESSIBLE_COURSES') {
        if (action.accessible) {
            if (state.filteredCourses.length > 0) {
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
        const [range1, range2] = action.priceRanges;
        if (range2 > range1) {
            // if (state.filteredCourses.length > 0) {}
            const updatedCourses = state.courses.filter(course => {
                return +course.preis.betrag >= range1 && +course.preis.betrag <= range2;
            });

            return {
                ...state,
                filteredCourses: updatedCourses,
                amount: updatedCourses.length,
            };
        } else {
            const updatedCourses = state.courses.filter(course => {
                return +course.preis.betrag < range1 && +course.preis.betrag >= range2;
            });

            return {
                ...state,
                filteredCourses: updatedCourses,
                amount: updatedCourses.length,
            };
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
        activeFilters: [...state.activeFilters, 'accessible'],
        amount: filteredCourses.length,
        accessible: true,
    };
};

export default reducer;