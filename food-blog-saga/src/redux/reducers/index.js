
const initialState = {
    food: []
}

export const rootReducer = ( state = initialState, action ) => {
    console.log( "[rootProducer in /redux/reducers]" )
    console.log( "1. action object ", action );
    console.log( "2. action.type ", action.type );
    console.log( "3. action.food ", action.food );
    switch ( action.type ) {
        case 'PRODUCTS_RECEIVED':
            
            return {
                ...state,
                food: action.food
            }
        default:
            return state;
    }
}