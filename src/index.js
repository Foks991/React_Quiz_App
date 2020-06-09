import React from 'react';
import {render} from 'react-dom';
import './components/App/app.css';
import App from './components/App/App';
import {createStore} from 'redux';
import rootReducer from "./store/reducers/rootReducer";
import {Provider} from 'react-redux';

const root = document.getElementById('root');

export const store = createStore(rootReducer);

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
);

render(app, root);