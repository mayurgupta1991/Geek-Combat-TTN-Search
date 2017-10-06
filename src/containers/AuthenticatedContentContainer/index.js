import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { grey100 } from 'material-ui/styles/colors';
import ReactTooltip from 'react-tooltip';
import AWS from 'aws-sdk';
import Header from '../../components/Header';
import AdminRoutes from '../RouteManagement/AdminRoutes';
import GuestRoutes from '../RouteManagement/GuestRoutes';
import HostRoutes from '../RouteManagement/HostRoutes';
import { logOut } from '../../actions/async/authentication';
import endpoints from '../../endpoints/authentication';
import { headerHeight, USER_TYPE } from '../../constants';
import classes from './styles.scss';

class AuthenticatedContentContainer extends Component {
    constructor() {
        super();
        this.state = {
            heightContainer: '100px',
            isMobile: false,
        };
        this.signOut = this.signOut.bind(this);
        this.updateContentDimensions = this.updateContentDimensions.bind(this);
    }

    componentWillMount() {
        AWS.config.update(endpoints.AWS_CONFIG);
        this.updateContentDimensions();
    }

    componentDidMount() {
        ReactTooltip.rebuild();
        window.addEventListener('resize', this.updateContentDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateContentDimensions);
    }

    updateContentDimensions() {
        const heightContainer = `${window.innerHeight - headerHeight}px`;
        const isMobile = window.innerWidth < 768;
        this.setState({ heightContainer, isMobile });
    }

    signOut() {
        this.props.userLogOut();
    }

    render() {
        const { heightContainer, isMobile } = this.state;
        const { userDashboard } = this.props;

        if (isEmpty(userDashboard)) {
            return null;
        }
        const content = (userDashboard.role === USER_TYPE.ADMIN || userDashboard.role === USER_TYPE.OPERATOR) ?
          <AdminRoutes /> : (userDashboard.role === USER_TYPE.HOST || userDashboard.role === USER_TYPE.VENDOR) ?
            <HostRoutes /> : <GuestRoutes />;

        const styles = {
            header: {
                paddingLeft: 0,
            },
            container: {
                backgroundColor: grey100,
                margin: '57px 0px 0px 0px',
                paddingTop: 23,
                paddingRight: 20,
                paddingBottom: 20,
                paddingLeft: 20,
                minHeight: heightContainer,
            },
        };

        return (
          <BrowserRouter>
            <div>
              <Header
                styles={styles.header}
                signOut={this.signOut}
                userType={userDashboard.role}
              />
              <div className={classes.mainContainer} style={styles.container}>
                <ReactCSSTransitionGroup
                  transitionName=""
                  transitionAppear
                  transitionAppearTimeout={1500}
                  transitionEnterTimeout={0}
                  transitionLeave={false}
                >
                  {content}
                </ReactCSSTransitionGroup>
              </div>
            </div>
          </BrowserRouter>
        );
    }
}

AuthenticatedContentContainer.defaultProps = {
    userDashboard: {},
};

AuthenticatedContentContainer.propTypes = {
    userDashboard: PropTypes.object.isRequired,
    userLogOut: PropTypes.func.isRequired,
};

const mapStateToProps = reduxState => {
    return {
        userDashboard: reduxState.userDashboard.dashboard,
    };
};


const mapDispatchToProps = dispatch => ({
    userLogOut() {
        dispatch(logOut());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticatedContentContainer);
