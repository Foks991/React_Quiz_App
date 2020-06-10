import React from 'react';
import {render} from 'react-dom';
import './components/Quiz/quiz.css';
import Quiz from './components/Quiz/Quiz';

import rootReducer from "./store/reducers/rootReducer";
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import rootSaga from './store/saga/rootSaga';
import {Provider} from 'react-redux';

const root = document.getElementById('root');

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

const app = (
    <BrowserRouter>
        <Provider store={store}>
            <Switch>
                {/*<Route path={'/'} component={App} exact/>*/}
                <Route path={'/quiz'} component={Quiz} exact/>
            </Switch>
        </Provider>
    </BrowserRouter>
);

render(app, root);