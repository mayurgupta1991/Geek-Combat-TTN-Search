import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import c from 'classnames';
import uniqueId from 'lodash/uniqueId';
import pickBy from 'lodash/pickBy';
import { FormattedMessage } from 'react-intl';
import classes from './style.scss';
import AutoComplete from '../AutoComplete';

class Filters extends Component {
    render() {
        const filters = [
          {
            type: 'location',
            values: [
              {
                id: '1',
                name: 'New Delhi',
              },
              {
                id: '2',
                name: 'Jaipur',
              },
              {
                id: '3',
                name: 'Bangalore',
              },
              {
                id: '4',
                name: 'Chennai',
              },
              {
                id: '5',
                name: 'Goa',
              }
            ]
          },
          {
            type: 'skillSet',
            values: [
              {
                id: '1',
                name: 'JAVA',
              },
              {
                id: '2',
                name: 'JS',
              },
              {
                id: '3',
                name: 'AWS',
              },
              {
                id: '4',
                name: 'BLAHH',
              },
              {
                id: '5',
                name: 'CS',
              }
            ]
          }
        ];
        return (
          <div className={ classes.filterWrapper }>
                <h4> FilterBy: </h4>
                <div className={ classes.categoryWrapper }>
                    { filters.map(filter => {
                          return (
                            <AutoComplete filterData={ filter } />
                          )

                      })
                    }
                </div>
          </div>
        );
    }
}

Filters.propTypes = {
    content: PropTypes.object.isRequired,
};

export default Filters;
