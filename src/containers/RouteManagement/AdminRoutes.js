import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from '../../components/LandingPage';
import SearchResultPage from '../../components/SearchResultPage';
import DetailsPage from '../../components/DetailsPage';
import AddProject from '../../components/AddProject';
import NoMatch from '../NoMatchContainer';

export default function AdminRoutes() {
    return (
        <Switch>
            <Route exact path="/addProject" component={AddProject} />
            <Route exact path="/details/:id" component={DetailsPage} />
            <Route exact path="/search/:id" component={SearchResultPage} />
            <Route exact path="/" component={LandingPage} />
            <Route component={NoMatch} />
        </Switch>
    );
}
