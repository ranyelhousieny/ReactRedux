//contains sagas / generator functions to manage the actions effectively & in async mode

import { put, takeLatest, all } from 'redux-saga/effects'; //import system defined api
//put: Function that instructs the middleware to schedule the dispatching of an action to the store
//takeLatest: if you dispatch the action before the previos API finishes, this function will stop that call and return only the latest one
//all : Function  that instructs the middleware to run multiple watch sagas function  in parallel and wait for all of them to complete

function* fetchNews() { //Generator function with *. //Worker Sagar: This is function called by the Watcher Saga
  const json = yield fetch('http://localhost:8500/products') //yield: pauses the function and retuns a notification once REST API "Get" call is generated
                                                             //async functions retun Promise --> has multiple retun values (data,notification or error)
        .then(response => response.json(), );    
  yield put({ type: "PRODUCTS_RECEIVED", json: json, }); /*yield: pauses the function and retuns a value once data arrives from the REST Service 
                                                           put  : Triggers a "PRODUCTS_RECEIVED" custom action to the store. 
                                                                  Reducer in ./reducers/index.js handles this action and sends out a notification
                                                                  once the data is retreived from the REST API */
                                                         
}

function* actionWatcher() {//Generator function with *.  //Watcher Saga: 
     yield takeLatest('GET_PRODUCTS', fetchNews); 
     //Listens for  a "PRODUCTS_RECEIVED" custom action that is triggerd by ./containers/Button.js
     //Watcher Saga listens to the triggered actions and then triggers the Worker Saga by calling fetchNews()
}
export default function* rootSaga() { //Generator function with *.  //Root Saga: All wacther sagas must be registered with the rootSaga
   yield all([   //All the wacther sagas registered here are executed one by one. Yield returns the value, one saga function at a  time
     actionWatcher(), //watcher Saga function defined above
   ]);
}