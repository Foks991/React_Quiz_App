import React from 'react';
import {render} from 'react-dom';
import './components/App/app.css';
import App from './components/App/App';

import rootReducer from "./store/reducers/rootReducer";
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter} from 'react-router-dom'
import createSagaMiddleware from 'redux-saga'

import rootSaga from './store/saga/rootSaga';
import {Provider} from 'react-redux';

const root = document.getElementById('root');

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

const app = (
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
);

render(app, root);