import React from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../actions'; //import custom function that triggers "GET_PRODUCTS" action defined

//functional component that represents the button
let Button=({getProducts})=>( //button receives the actions context as a parammeter & click calls "getProducts" that triggers action type "GET_PRODUCTS"
    <div>
        <br/>
        <center>
            <button onClick={getProducts} className="btn btn-success">  {/* click calls "getProducts" that triggers action type "GET_PRODUCTS"*/}
                Press to see Products
            </button>
        </center>
    </div>
   
);

const mapDispatchToProps = {  //Custom const variable that holds the ref to the action that is called on button click
    getProducts: getProducts 
};

Button = connect(null,mapDispatchToProps)(Button); //Button component is connected to Redux  Store using the connect function
//null as currently there is no data from the store to connect to this button
//mapDispatchToProps: custom action method mapping that dispatches actions to the store
//Button: component that needs to connect to the Redux Store

export default Button;