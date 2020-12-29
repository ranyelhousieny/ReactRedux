const redux = require( 'redux' );
const createStore = redux.createStore;

const initializeState = {
    counter: 0
}

// Reducer
const rootReducer = ( state = initializeState, action ) => {
    switch ( action.type ) {
        case 'INC_COUNTER':
            return {
                ...state,
                counter: state.counter + 1
            };
        case 'DEC_COUNTER':
            return {
                ...state,
                counter: state.counter - 1
            };
        
        default:
            return state;
    }
}


// Store
const store = createStore( rootReducer );
console.log( '1. counter = ', store.getState() );

