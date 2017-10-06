import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import AuthContent from './containers/AuthenticatedContentContainer';
import UnauthContent from './containers/UnauthenticatedContentContainer';
import Spinner from './components/SpinnerLoader';
import { getUserStorage, getCookieUrl } from './util/browserStorage';
import { tokenGenerator } from './actions/configSettings';
import { fetchUserAndLoadData } from './actions/async/fetchData';
import { changeDashboardLoadingStatus, setEnableCookieUrl } from './actions/common';

// This class is always rendered and decides whether we need a login
// page or to grant app access.

class Gatekeeper extends Component {
    constructor() {
        super();
        this.state = {
            showSpinner: true,
        };
    }

    componentWillMount() {
        const { createToken, setCookieUrl } = this.props;
        const accessToken = getUserStorage();
        setCookieUrl(getCookieUrl());
        if (accessToken) {
            createToken(accessToken);
            this.props.changeDashboardState({ status: true });
        } else {
            this.setState({ showSpinner: false });
        }
    }

    componentWillReceiveProps(nextProps) {
        const { isUserLoggedIn, isDashboardLoading } = nextProps;
        if (isUserLoggedIn && isDashboardLoading) {
            this.setState({ showSpinner: true });
            this.props.fetchUserData().then(() => {
                this.props.changeDashboardState({ status: false });
                this.setState({ showSpinner: false });
            });
        }
    }

    render() {
        const { isUserLoggedIn } = this.props;
        const { showSpinner } = this.state;
        const showContent = isUserLoggedIn ? <AuthContent /> : <UnauthContent />;
        const content = showSpinner ? <Spinner /> : showContent;
        return (
          <div>
            {content}
            <ReactTooltip />
          </div>
        );
    }

}

Gatekeeper.propTypes = {
    isUserLoggedIn: PropTypes.bool.isRequired,
    isDashboardLoading: PropTypes.bool.isRequired,
    createToken: PropTypes.func.isRequired,
    fetchUserData: PropTypes.func.isRequired,
    changeDashboardState: PropTypes.func.isRequired,
    setCookieUrl: PropTypes.func.isRequired,
};

const mapStateToProps = reduxState => {
    return {
        isUserLoggedIn: reduxState.authentication.userLoggedIn,
        isDashboardLoading: reduxState.dashboardUiStatus.loading,
    };
};

const mapDispatchToProps = dispatch => ({
    createToken(accessToken) {
        dispatch(tokenGenerator(accessToken));
    },
    setCookieUrl(url) {
        dispatch(setEnableCookieUrl(url));
    },
    changeDashboardState(loadingStatus) {
        dispatch(changeDashboardLoadingStatus(loadingStatus));
    },
    fetchUserData() {
        return dispatch(fetchUserAndLoadData());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Gatekeeper);
