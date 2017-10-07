import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import c from 'classnames';
import uniqueId from 'lodash/uniqueId';
import pickBy from 'lodash/pickBy';
import { FormattedMessage } from 'react-intl';
import classes from './style.scss';
import NoResultFound from '../../components/SearchResultPage/NoResultFound';

class SearchResult extends Component {
  render() {
    const { content } = this.props;
      return (
          <div className={ classes.searchResultWrapper }>
              <ul className={ classes.searchResults }>
                { content && content.length
                    ? content.map((listItem, index) => {
                        return (
                          <li
                              key={ index }
                              tabIndex='0'
                              onClick={ () => this.performSearch(listItem.name) }
                          >
                              <span className={ classes.snapshot }>
                                  <h3> { listItem.name } </h3>
                                  <p> { listItem.desc } </p>
                              </span>
                              <RaisedButton label="VIEW"  />
                          </li>
                        )
                      })
                    : <NoResultFound />
                }
              </ul>
          </div>
      );
  }
}

SearchResult.defaultProps = {
  content: [],
};

SearchResult.propTypes = {
    content: PropTypes.array,
};

export default SearchResult;
