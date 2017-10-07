import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import SearchBar from '../../containers/SearchBar';
import classes from './styles.scss';

class LandingPage extends Component {
    constructor() {
        super();
    }

    render() {
        return (
          <div className={ classes.bodyWrapper }>
            <img  className={ classes.logoImg } src={require('../../public/logo.png')} alt="TTN" />
            <SearchBar />
          </div>
        );
    }
}

export default LandingPage;
