import React from 'react';
import ReactDOM from 'react-dom';
import Routing from './component/routing';
import { Provider} from 'react-redux';
import store from './store';
import App from './App';



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));