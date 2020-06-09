const redux = require('redux');

const initialState = {
    counter: 0,
};

// Setter
const myReducer = (state = initialState, action) => {
    if (action.type === 'INCREMENT_BY_ONE') {
        return {
            ...state,
            counter: state.counter + 1,
        };
    }

    if (action.type === 'INCREMENT_BY_X') {
        return {
            ...state,
            counter: state.counter + action.myPayload,
        };
    }
};

const store = redux.createStore(myReducer);

console.log(store.getState());

// ------------------------------------------

store.subscribe(() => {
    console.log('Subscriber got notified: ', store.getState());
});

// Actions
const myAction = {type: 'INCREMENT_BY_X', myPayload: 3};
const myAction2 = {type: 'INCREMENT_BY_ONE'};

// Dispatch Actions (For example when the User clicks on "ADD"-Btn in DOM:
store.dispatch(myAction);
store.dispatch(myAction2);


console.log(store.getState());
