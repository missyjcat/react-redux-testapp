import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App';
import './index.css';
import testApp from './reducers/reducers';

let store = createStore(testApp, {
    user: {
        id: '001',
        name: 'Jess',
        dog: 'Maggie',
        baby: 'Miles',
        hub: 'Q'
    }
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
