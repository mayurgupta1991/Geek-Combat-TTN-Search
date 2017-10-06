import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ThemeDefault from '../../themes/themeDefault';
import UnauthContent from './UnauthContentPane';
import NoMatch from '../NoMatchContainer';

export default function UnauthenticatedContentContainer() {
    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={UnauthContent} />
            <Route component={NoMatch} />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider >
    );
}
