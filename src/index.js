import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// HashRouter
import {HashRouter} from 'react-router-dom'

// Provider
import {Provider} from 'react-redux'

//Import Store
import store from './redux/store'

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
, document.getElementById('root'));
