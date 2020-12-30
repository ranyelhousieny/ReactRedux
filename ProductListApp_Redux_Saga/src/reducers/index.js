//Reducer : manages state in redux store and retuns the the final state to the view

const reducer = (state = {}, action) => { //passes initial state and action to the function. Populated by the system
    switch (action.type) {
      case 'GET_PRODUCTS':       //action type to be processed by this reducer, until data arrives from the REST-API (pending action)
           return { ...state, loading: true }; //Spread operator that expands the data array wihtout need for iteration code, if data is available
      case 'PRODUCTS_RECEIVED':  //action type to be processed by this reducer, once data arrives from the REST-API (completed action)
           return { ...state, products: action.json, loading: false } 
            /*... Spread operator that expands the "products" data array wihtout need for iteration code. 
            Loading set= false once REST data arrives
            false also indicates no other action to be processed after this action
            */

      default: 
           return state; //Final state  after processing the action   
    }
   };
   export default reducer;