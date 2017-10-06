import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import c from 'classnames';
import uniqueId from 'lodash/uniqueId';
import pickBy from 'lodash/pickBy';
import { FormattedMessage } from 'react-intl';
import classes from './style.scss';

class Tabs extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
            activeTabId: '',
        };
    }

    getHighlightedTabName(activeTabId) {
        return this.props.tabList.find(tab => tab.identifier === activeTabId).name;
    }

    switchTab(idx) {
        this.setState({ isOpen: false, activeTabId: idx }, () => {
            //this.props.setActiveTabId(idx);
        });
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
        const { content, activeTab } = this.props;
        const dummyTabs = [
            {
                identifier: 1,
                label: 'asdadasda',
            },
            {
                identifier: 2,
                label: 'asdadasda',
            },
            {
                identifier: 3,
                label: 'asdadasda',
            },
            {
                identifier: 4,
                label: 'asdadasda',
            },
        ]
        const tabs = this.showTabs(dummyTabs);
        return (
          tabs.length
            ? <div className={ classes.tabContainer }>
                <ul className={ classes.tabOptions }>
                    { tabs }
                </ul>
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
