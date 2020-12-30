
// Redux Store
import { createStore, applyMiddleware, compose } from 'redux';


// Reducer
import { rootReducer } from './reducers';

import rootSaga from './sagas'

// 1.import to create Redux middleware and connect saga to it
import createSagaMiddleware from 'redux-saga';        

// Redux Dev tools logging 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 2. initialize the context of the Saga middleware
const sagaMiddleware = createSagaMiddleware();

/* 3. create a redux store by importing createStore and applyMiddleware system 
      defined classes. 
      Connects the reducers, Saga  middleware & the logger service to the store
*/

const store = createStore(rootReducer,
    composeEnhancers(
        applyMiddleware( sagaMiddleware ) ));

/* 4. registers all the user defined sagas from ./sagas folder 
      with the Saga middlweare
*/
sagaMiddleware.run( rootSaga );


export default store;
