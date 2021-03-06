import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import c from 'classnames';
import { withRouter } from 'react-router-dom';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import enhanceWithClickOutside from 'react-click-outside';
import trim from 'lodash/trim';
import classes from './styles.scss';
import { setSearch } from '../../actions/search';
import { fetchSearchResult } from '../../actions/async/fetchData';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.value,
            isSearchResultVisible: false,
            matchedResult: [],
            noOfResults: 0,
            arrowPressedCount: -1,
        };
        this.listCounter = -1;
        this.appliedFilterList = {};
    }

    componentWillMount() {
        this.setState({ matchedResult: [...this.props.searchList] });
    }

    componentWillUnmount() {
        this.setState({ isSearchResultVisible: false });
    }

    componentWillReceiveProps(newProps) {
        this.setState({ matchedResult: [...newProps.searchList], isSearchResultVisible: true });
    }

    onKeyPress(key, value) {
        if (key === 'Enter' && trim(value)) {
            this.props.history.push(`/search/${value}`);
        }
    }

    onIconClick() {
        const value = this.searchBox.value
        if (trim(value)) {
            this.props.history.push(`/search/${value}`);
        }
    }

    highlightQuery(title, query) {
        const regex = new RegExp(`(${escapeRegExp(query)})`, 'gi');
        const highlightStyle = { color: CLAVIS_NAVY };
        return title && title.split(regex).reduce((nodes, text, index) => {
            if (!index) {
                return [<span key={ `text-${index}` }>{ text }</span>];
            }
            const highlightedNode = text.toLocaleLowerCase() === query.toLocaleLowerCase()
                ? <span key={ `query-${index}` } style={ highlightStyle }>{ text }</span>
                : <span key={ `text-${index}` }>{ text }</span>;

            nodes.push(highlightedNode);

            return nodes;
        }, []);
    }

    navigateSearchResult(event) {
        switch (event.key) {
        case 'ArrowDown': {
            if (this.listCounter >= (this.state.arrowPressedCount + 1)) {
                this.setState({ arrowPressedCount: this.state.arrowPressedCount + 1 }, () => {
                    this.focusListItem(this.state.arrowPressedCount);
                });
            }
            event.preventDefault();
            break;
        }
        case 'ArrowUp': {
            if (this.state.arrowPressedCount > 0) {
                this.setState({ arrowPressedCount: this.state.arrowPressedCount - 1 }, () => {
                    this.focusListItem(this.state.arrowPressedCount);
                });
            } else {
                this.setState({ arrowPressedCount: -1 }, () => {
                    this.focusSearchBox();
                });
            }
            event.preventDefault();
            break;
        }
        case 'Backspace': {
            this.setState({ arrowPressedCount: -1 }, () => {
                this.focusSearchBox();
            });
            break;
        }
        default: this.setState({ arrowPressedCount: this.state.arrowPressedCount });
        }
    }

    focusListItem(idx) {
        this[this.generateRef(idx)].focus();
    }

    focusSearchBox() {
        this.searchBox.focus();
    }

    resetArrowCount() {
        this.setState({ arrowPressedCount: -1 });
    }

    focusedResult(event, item) {
        this.setState({ value: item.title, selectedResult: item });
    }

    shouldPerformSearch(event, listItem) {
        if (event.key === 'Enter') this.performSearch(listItem);
        if (event.button === 0) this.performSearch(listItem);
    }

    generateRef(idx) {
        return `result${idx}`;
    }

    onInputChange(value) {
        value && this.setState({ value }, () => {
            value.length >= 3 && this.props.setSearch(value);
        }) || this.setState({ value });
    }

    onInputFocus() {
        this.setState({ isSearchResultVisible: true });
    }

    performSearch(searchId) {
        this.setState({ isSearchResultVisible: false }, () => {
            this.props.history.push(`/details/${searchId}`);
        });
    }

    handleClickOutside() {
        this.setState({
            isSearchResultVisible: this.state.isSearchResultVisible && !this.state.isSearchResultVisible,
        });
    }

    render() {
        this.listCounter = -1;
        const className = c(classes.searchBar, this.props.className);
        const placeholder = this.props.intl.formatMessage({ id: 'search.placeholder' });
        const { isSearchResultVisible, value, matchedResult } = this.state;

        return (
            <div className={ className }>
                <div className={ classes.inputWrapper }>
                    <input
                        ref={ (element) => { this.searchBox = element; } }
                        type='text'
                        placeholder={ placeholder }
                        value={ value }
                        onChange={ event => this.onInputChange(event.target.value) }
                        onFocus={ event => this.onInputFocus() }
                        onKeyPress={ event => this.onKeyPress(event.key, event.target.value) }
                        onKeyDown={ event => this.navigateSearchResult(event) }
                    />
                </div>
                <button onClick={ () => this.onIconClick() }>
                    <i className="material-icons">
                        search
                    </i>
                </button>
                {
                    <div className={ c(classes.searchResultWrapper, { [classes.hideResult]: !isSearchResultVisible }) }>
                        <ul className={ classes.searchResults }>
                            { matchedResult.map((listItem, index) => {
                                    return (
                                      <li
                                        ref={ (element) => { this[this.generateRef(index)] = element; } }
                                        key={ index }
                                        tabIndex='0'
                                        onClick={ () => this.performSearch(listItem.title) }
                                      >
                                          {listItem.imageLink ? <img src={listItem.imageLink} /> : null}
                                          <div>
                                            <h3> { listItem.title } </h3>
                                            <p> { listItem.description } </p>
                                          </div>
                                      </li>
                                     )
                                })
                            }
                        </ul>
                    </div>
                }
            </div>
        );
    }
}

SearchBar.defaultProps = {
    value: '',
    isSearchResultVisible: false,
    resultSet: {},
    matchedResult: [],
    noOfResults: 0,
    dashboardList: {},
    runtimeSettings: {},
    entities: {},
    trackEvent: () => {},
};

SearchBar.contextTypes = {
    router: PropTypes.object,
};

SearchBar.propTypes = {
    value: PropTypes.string,
    intl: intlShape.isRequired,
    setSearch: PropTypes.func.isRequired,
    searchList: PropTypes.array.isRequired,
    history: React.PropTypes.shape({
        push: React.PropTypes.func.isRequired,
    }).isRequired,
};

function mapStateToProps(reduxState) {
    return {
        searchList: reduxState.search.result,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setSearch(searchQuery) {
            dispatch(fetchSearchResult(searchQuery));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(withRouter(enhanceWithClickOutside(SearchBar))));

export { SearchBar as SearchBarComponent };
