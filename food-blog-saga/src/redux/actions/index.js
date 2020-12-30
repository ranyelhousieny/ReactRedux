

export const getFoodAction = () => {
    console.log( "getFoodAction in ./redux/actions" );
    return ( {
        // action type: used to trigger the action that is 
        // handled by the ./redux/reducers/index.js file
        type: 'GET_FOOD_FROM_ACTION',
        food: []
    } );
};

export const getFoodItemAction = (url) => {
    console.log( "getFoodItemAction in ./redux/actions", url );
    return ( {
        // action type: used to trigger the action that is 
        // handled by the ./redux/reducers/index.js file
        type: 'GET_FOOD_ITEM_FROM_ACTION',
        food: [],
        url: url
    } );
};