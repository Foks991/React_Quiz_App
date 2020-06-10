import React from 'react';
import Tests from './Tests/Tests.js';
import AllQuizzes from "./Tests/AllQuizes/AllQuizes";
import {Route, Switch} from 'react-router-dom'

export default () =>
    <div className={'App'}>
        <Switch>
            <Route path={'/'} component={AllQuizzes} exact/>
            <Route path={'/quiz'} component={Tests} exact/>
        </Switch>
    </div>;

