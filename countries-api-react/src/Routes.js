import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Views
import Home from './views/Home'
import Countrie from './views/Countrie';
import notFound from './views/notFound';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/countrie/:name" component={Countrie} />
            <Route component={notFound} />
        </Switch>
    </BrowserRouter>
);

export default Routes;