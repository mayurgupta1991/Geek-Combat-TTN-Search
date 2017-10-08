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
        label: 'all',
        content: [
            {
                name: 'HDFC Limited - Retail Lending Operations (0-5 yrs) Delhi/NCR',
                desc: 'HDFC',
                region: 'New Delhi Area, India',
                src: 'https://media-exp2.licdn.com/mpr/mpr/shrink_100_100/p/1/005/00c/124/3460995.png',
            },
            {
                name: 'HDFC ERGO General Insurance',
                desc: 'HDFC',
                region: 'Mumbai Area, India',
                src: 'https://media-exp2.licdn.com/mpr/mpr/shrink_100_100/AAEAAQAAAAAAAA17AAAAJDQ3ZjAwNjZlLWFhMmMtNDQ4ZC1iY2UwLTk4OTk1ZjUwNzBkMg.png',
            },
            {
                name: 'HDFC AMC',
                desc: 'Financial Services',
                region: 'New Delhi Area, India',
                src: 'https://media-exp2.licdn.com/mpr/mpr/shrink_100_100/p/1/000/082/1fb/1e097ec.png',
            },
            {
                name: 'HDFC Life',
                desc: 'Insurance',
                region: 'New Delhi Area, India',
                src: 'https://media-exp2.licdn.com/mpr/mpr/shrink_100_100/p/1/000/07f/283/290a400.png',
            },
        ],
    },
    {
        identifier: 2,
        label: 'companies',
        content: [
            {
                name: 'HDFC Limited - Retail Lending Operations (0-5 yrs) Delhi/NCR',
                desc: 'HDFC',
                region: 'New Delhi Area, India',
                src: 'https://media-exp2.licdn.com/mpr/mpr/shrink_100_100/p/1/005/00c/124/3460995.png',
            },
            {
                name: 'HDFC ERGO General Insurance',
                desc: 'HDFC',
                region: 'Mumbai Area, India',
                src: 'https://media-exp2.licdn.com/mpr/mpr/shrink_100_100/AAEAAQAAAAAAAA17AAAAJDQ3ZjAwNjZlLWFhMmMtNDQ4ZC1iY2UwLTk4OTk1ZjUwNzBkMg.png',
            },
            {
                name: 'HDFC AMC',
                desc: 'Financial Services',
                region: 'New Delhi Area, India',
                src: 'https://media-exp2.licdn.com/mpr/mpr/shrink_100_100/p/1/000/082/1fb/1e097ec.png',
            },
            {
                name: 'HDFC Life',
                desc: 'Insurance',
                region: 'New Delhi Area, India',
                src: 'https://media-exp2.licdn.com/mpr/mpr/shrink_100_100/p/1/000/07f/283/290a400.png',
            },
        ],
    },
    {
        identifier: 3,
        label: 'content',
        content: [],
    },
    {
        identifier: 4,
        label: 'people',
        content: [],
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
                <button> { item.label } </button>
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
