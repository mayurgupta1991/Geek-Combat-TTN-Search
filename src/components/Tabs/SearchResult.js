import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import c from 'classnames';
import uniqueId from 'lodash/uniqueId';
import pickBy from 'lodash/pickBy';
import { FormattedMessage } from 'react-intl';
import classes from './style.scss';
import NoResultFound from '../../components/SearchResultPage/NoResultFound';

class SearchResult extends Component {
    constructor(props) {
        super(props);
        this.goToDetailsPage = this.goToDetailsPage.bind(this);
    }
    goToDetailsPage(queryParam) {
        this.props.history.push(`./details/${queryParam}`);
    }

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
                              onClick={ () => this.goToDetailsPage(listItem.name) }
                          >
                              <div className={ classes.searchResultImageWrapper }>
                                  <figure>
                                      <img src={listItem.src} />
                                  </figure>
                              </div>
                              <div className={ classes.searchResultInfo }>
                                  <h3> { listItem.name } </h3>
                                  <p> { listItem.desc } </p>
                                  <p className={ classes.searchResultRegion }> { listItem.region } </p>
                              </div>
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
