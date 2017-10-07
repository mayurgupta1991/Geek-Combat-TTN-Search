import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import c from 'classnames';
import uniqueId from 'lodash/uniqueId';
import pickBy from 'lodash/pickBy';
import { FormattedMessage } from 'react-intl';
import SearchResult from './SearchResult';
import classes from './style.scss';

const dummyTabs = [
    {
        identifier: 1,
        label: 'asdadasda',
        content: [
            {
                name: 'AAAAAAAAAAAAAAAAAA',
                desc: 'MMMMMMMMMMMMMMMMMM111111111111111111111111',
            },
            {
                name: 'AAAAAAAAAAAAAAAAAA',
                desc: 'MMMMMMMMMMMMMMMMMM111111111111111111111111',
            },
            {
                name: 'AAAAAAAAAAAAAAAAAA',
                desc: 'MMMMMMMMMMMMMMMMMM111111111111111111111111',
            },
            {
                name: 'AAAAAAAAAAAAAAAAAA',
                desc: 'MMMMMMMMMMMMMMMMMM111111111111111111111111',
            },
            {
                name: 'AAAAAAAAAAAAAAAAAA',
                desc: 'MMMMMMMMMMMMMMMMMM111111111111111111111111',
            }
        ],
    },
    {
        identifier: 2,
        label: 'asdadasda',
        content: [],
    },
    {
        identifier: 3,
        label: 'asdadasda',
        content: [
            {
                name: 'AAAAAAAAAAAAAAAAAA',
                desc: 'MMMMMMMMMMMMMMMMMM1111111111111111111111111',
            }
        ],
    },
    {
        identifier: 4,
        label: 'asdadasda',
        content: [
            {
                name: 'AAAAAAAAAAAAAAAAAA',
                desc: 'MMMMMMMMMMMMMMMMMM2222222222222222222222222222',
            }
        ],
    },
];

class Tabs extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
            activeTabId: dummyTabs[0].identifier,
        };
    }

    switchTab(identifier) {
        this.setState({ isOpen: false, activeTabId: identifier, content: this.getActiveTabContent(dummyTabs, identifier) });
    }

    componentDidMount() {
        this.setState({ activeTabId: dummyTabs[0].identifier, content: this.getActiveTabContent(dummyTabs, dummyTabs[0].identifier) });
    }

    getActiveTabContent(tabs, identifier) {
        return tabs.find(tab => tab.identifier === identifier).content;
    }

    showTabs(tabList) {
        const dynamicWidth = {
            maxWidth: '100%',
        };
        const tabs = tabList.map(item => (
            <li
                key={ item.identifier }
                className={ item.identifier === this.state.activeTabId ? classes.active : null }
                style={ dynamicWidth }
                onClick={ () => this.switchTab(item.identifier) }
             >
                <span> { item.label } </span>
            </li>
        ));
        return tabs;
    }

    render() {
        const tabs = this.showTabs(dummyTabs);
        return (
          tabs.length
            ? <div className={ classes.tabContainer }>
                <ul className={ classes.tabOptions }>
                    { tabs }
                </ul>
                <div className='row'>
                   <SearchResult content={ this.state.content } />
                </div>
            </div>
            : null
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setActiveTabId(activeTabId) {
            dispatch(setActiveTab(activeTabId));
        },
    };
}

Tabs.propTypes = {
    content: PropTypes.object.isRequired,
    tabList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(null, mapDispatchToProps)(Tabs);
