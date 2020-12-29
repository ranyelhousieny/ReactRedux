const redux = require( 'redux' );

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
const store = redux.createStore( rootReducer );
console.log( '1. counter = ', store.getState() );

// Dispatch Action
store.dispatch( { type: 'INC_COUNTER' } );
console.log( '2. Inc = ', store.getState() );

store.dispatch( { type: 'DEC_COUNTER' } );
console.log( '3. Dec = ', store.getState() );