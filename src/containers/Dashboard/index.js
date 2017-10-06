import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import PageBase from '../../components/PageBase';
import classes from './styles.scss';

class Dashboard extends Component {
    constructor() {
        super();
    }

    render() {
        return (
          <div className={classes.videoManager}>
            <PageBase
              title={<FormattedMessage id="dashboard" />}
              navigation={<FormattedMessage id="breadCrumbs.dashboard" />}
              minHeight={300}
            >
              asdasddasasdads
            </PageBase>
          </div>
        );
    }
}

export default injectIntl(Dashboard);
