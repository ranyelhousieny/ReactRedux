import React from 'react';
import createSagaMiddleware from 'redux-saga';        //import to create Redux middleware and connect saga to it
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux'; //system defined, used to connect middleware with the store
import { Provider } from 'react-redux'; 
import { logger } from 'redux-logger';                 //system defined. inspects panel triggered actions and state of Redux store in console panel
import reducer from './reducers';                      //imports all the custom reducers from this folder
import App from './components/App';
import rootSaga from './sagas';                        //imports all the custom sagas from this folder, bundled under rootSaga

const sagaMiddleware = createSagaMiddleware();         //initialize the context of the Saga middleware

const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger) );
// create a redux store by importing createStore and applyMiddleware system defined classes. 
// Connects the reducers, Saga  middleware & the logger service to the store


sagaMiddleware.run(rootSaga); //registers all the user defined sagas from ./sagas folder with the Saga middlweare

render(//Provider connects the store to the view, allows the view to take data from the store .
      
    //store context is passed to the Provider which makes it available to the the root view "App" & its child views
   <Provider store={store}>
     <App />
   </Provider>,
    document.getElementById('root'),
);

if (module.hot) { module.hot.accept(App);} 
/*
Hot module replacement (HMR). Using the webpack-dev-server we can set up hot module replacement with React.
This means whenever we modify a component and save the file webpack will replace the module on the page without reloading, 
and without losing component state

if  component  has changes , replace the module on the page without reloading & resetting its state
*/