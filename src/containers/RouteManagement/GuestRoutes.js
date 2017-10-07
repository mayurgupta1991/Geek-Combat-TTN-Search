import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from '../../components/LandingPage';
import SearchResultPage from '../../components/SearchResultPage';
import NoMatch from '../NoMatchContainer';

export default function UserRoutes() {
    return (
        <Switch>
            <Route exact path="/:id" component={SearchResultPage} />
            <Route exact path="/" component={LandingPage} />
            <Route component={NoMatch} />
        </Switch>
    );
}
