import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../Dashboard';
import NoMatch from '../NoMatchContainer';

export default function HostRoutes() {
    return (
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route component={NoMatch} />
      </Switch>
    );
}
