import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import Tabs from '../Tabs';
import Filters from '../Filters';
import classes from './styles.scss';

class SearchResultPage extends Component {
    constructor() {
        super();
    }

    render() {
        return (
          <div className={ classes.srpWrapper }>
            <Tabs />
            <Filters />
          </div>
        );
    }
}

export default SearchResultPage;
