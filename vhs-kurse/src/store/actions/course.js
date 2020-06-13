import axios from "axios";

export const fetchCourses = (amount) => {
    return (dispatchAction) => {
        axios.get('https://vhs-kurse.firebaseio.com/veranstaltungen/' +
            'veranstaltung.json?orderBy="$key"&limitToFirst=' + amount)
            .then(res => {
                const fetchedCourses = res.data;
                dispatchAction(createActionFetchCourses(fetchedCourses));
            })
            .catch(err => {
                console.log(err);
                // this.setState({loading: false})
            });
    };
};

export const filterAccessibleCourses = (accessible) => {
    return (dispatchAction) => {
        dispatchAction(actionAccessibleCourses(accessible));
    };
};

export const filterPriceRange = (priceRange) => {
    return dispatch => {
        dispatch(createActionFilterPriceRange(priceRange))
    };
};

// Actions ++++++++++++++++++++++++++++++++++++++++

const createActionFetchCourses = (fetchedCourses) => {
    return {
        type: 'FETCH_COURSES',
        fetchedCourses: fetchedCourses,
    };
};

const actionAccessibleCourses = (accessible) => {
    return {
        type: 'FILTER_ACCESSIBLE_COURSES',
        accessible: accessible,
    };
};

const createActionFilterPriceRange = (priceRange) => {
    return {
        type: 'FILTER_PRICE_RANGE',
        priceRange: priceRange,
    }
};