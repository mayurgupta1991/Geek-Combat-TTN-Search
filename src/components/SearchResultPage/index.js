import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import SearchBar from '../../containers/SearchBar';
import Tabs from '../Tabs';
import classes from './styles.scss';

class SearchResultPage extends Component {
    constructor() {
        super();
    }

    render() {
        return (
          <div>
            <Tabs />
          </div>
        );
    }
}

export default SearchResultPage;
