import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import c from 'classnames';
import uniqueId from 'lodash/uniqueId';
import pickBy from 'lodash/pickBy';
import { FormattedMessage } from 'react-intl';
import classes from './style.scss';
import AutoComplete from '../AutoComplete';
import CheckBoxWrapper from '../CheckBoxWrapper';

class Filters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filtersSelected: {},
        };
        this.setFilters = this.setFilters.bind(this);
    }

    setFilters(filters, type) {
        const newFilters = this.state.filtersSelected;
        newFilters[type] = filters;
        this.setState({ filtersSelected: newFilters }, () => {
          console.log("asdklaugdasdadaduasd", this.state.filtersSelected);
        });
    }

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
          },
          {
            type: 'businessType',
            values: [
                {
                  id: '1',
                  name: 'B2B',
                },
                {
                  id: '2',
                  name: 'B2C',
                },
            ]
          }
        ];
        return (
          <div className={ classes.filterWrapper }>
                <h4 className={ classes.filterWrapperHeading }>
                    Filters:
                </h4>
                <div className={ classes.categoryWrapper }>
                    { filters.map(filter => {
                          return (
                              filter.type !== 'businessType'
                                ? <AutoComplete filterData={ filter } onChange={ this.setFilters } />
                                : <CheckBoxWrapper filterData={ filter } onChange={ this.setFilters } />
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
