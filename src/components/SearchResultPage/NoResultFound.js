import React, { Component } from 'react';
import classes from './styles.scss';

class NoResultFound extends Component {
    render() {
        return (
          <div className={ classes.noResultWrapper }>
              No Record Found
          </div>
        );
    }
}

export default NoResultFound;

