//displays the spinner control until data arrives from the server

import React from 'react';
import { connect } from 'react-redux';
import img from '../loading.gif';  //imprt the user defined custom image to display as an hourglass until data is retreived from the REST API

// functional Component
let Loading = ({ loading }) => ( //ternary op. Display  temp "loading.gif" if variable loading=true, else return null. 
                                 //loading=true is set by reducer in ./reducers/index.js 
   loading ?
   <div style={{ textAlign: 'center' }}>
      <img src={img} alt='loading' />
      <h1>LOADING</h1>
   </div> :
   null
);

const mapStateToProps = (state) => ({loading: state.loading}); //system defined function receives the state from reducers
//loading: props to which the retreived state is assigned. //same props "loading" is passed to the "Loading" component above
//state.loading: state received from the reducer

Loading = connect(mapStateToProps,null)(Loading); //Loading component is connected to Redux  Store using the connect function 
//mapStateToProps : data from the store to connect to the component
//null as there is no  custom action method mapping that dispatches actions to the store for displaying the loading.gif image (eg. No button click etc.)
//Loading: component that needs to connect to the Redux Store

export default Loading;