import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { grey100 } from 'material-ui/styles/colors';
import ReactTooltip from 'react-tooltip';
import AWS from 'aws-sdk';
import Header from '../../components/Header';
import LeftDrawer from '../../components/LeftDrawer';
import AdminRoutes from '../RouteManagement/AdminRoutes';
import GuestRoutes from '../RouteManagement/GuestRoutes';
import HostRoutes from '../RouteManagement/HostRoutes';
import { logOut } from '../../actions/async/authentication';
import { fetchCountryList } from '../../actions/async/location';
import endpoints from '../../endpoints/authentication';
import { headerHeight, USER_TYPE } from '../../constants';
import classes from './styles.scss';

class AuthenticatedContentContainer extends Component {
    constructor() {
        super();
        this.state = {
            navDrawerOpen: true,
            heightContainer: '100px',
            isMobile: false,
        };
        this.showNavBar = this.showNavBar.bind(this);
        this.signOut = this.signOut.bind(this);
        this.updateContentDimensions = this.updateContentDimensions.bind(this);
        this.openSwagger = this.openSwagger.bind(this);
    }

    componentWillMount() {
        AWS.config.update(endpoints.AWS_CONFIG);
        this.updateContentDimensions();
    }

    componentDidMount() {
        this.props.getCountryList();
        ReactTooltip.rebuild();
        window.addEventListener('resize', this.updateContentDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateContentDimensions);
    }

    showNavBar() {
        this.setState({
            navDrawerOpen: !this.state.navDrawerOpen,
        });
    }

    updateContentDimensions() {
        let { navDrawerOpen } = this.state;
        const heightContainer = `${window.innerHeight - headerHeight}px`;
        const isMobile = window.innerWidth < 768;
        if (navDrawerOpen && isMobile) {
            navDrawerOpen = false;
        }
        this.setState({ heightContainer, navDrawerOpen, isMobile });
    }

    openSwagger() {
        const { token } = this.props;
        const url = `${endpoints.swaggerPath}${token}`;
        window.open(url);
    }

    signOut() {
        this.props.userLogOut();
    }

    render() {
        const { navDrawerOpen, heightContainer, isMobile } = this.state;
        const { userDashboard, currentPage } = this.props;

        if (isEmpty(userDashboard)) {
            return null;
        }
        const content = (userDashboard.role === USER_TYPE.ADMIN || userDashboard.role === USER_TYPE.OPERATOR) ?
          <AdminRoutes /> : (userDashboard.role === USER_TYPE.HOST || userDashboard.role === USER_TYPE.VENDOR) ?
            <HostRoutes /> : <GuestRoutes />;

        const paddingLeftDrawerOpen = 250;
        const styles = {
            header: {
                paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0,
            },
            container: {
                backgroundColor: grey100,
                margin: '57px 0px 0px 0px',
                paddingTop: 23,
                paddingRight: 20,
                paddingBottom: 20,
                paddingLeft: (navDrawerOpen && (window.innerWidth > 768)) ? paddingLeftDrawerOpen : 20,
                minHeight: heightContainer,
            },
        };

        const leftDrawerContent = (currentPage > -1) ?
          (
            <LeftDrawer
              navDrawerOpen={navDrawerOpen}
              userDashboard={userDashboard}
              currentPage={currentPage}
              showHamburger={isMobile}
              onSelectedIndexChanged={this.updateContentDimensions}
            />
          ) : null;

        return (
          <BrowserRouter>
            <div>
              <Header
                styles={styles.header}
                showNavBar={this.showNavBar}
                signOut={this.signOut}
                openSwagger={this.openSwagger}
                userType={userDashboard.role}
              />
              {leftDrawerContent}
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
    token: PropTypes.string.isRequired,
    userLogOut: PropTypes.func.isRequired,
    getCountryList: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,
};

const mapStateToProps = reduxState => {
    return {
        userDashboard: reduxState.userDashboard.dashboard,
        currentPage: reduxState.runtimeSettings.currentPage,
        token: reduxState.authentication.accessToken,
    };
};


const mapDispatchToProps = dispatch => ({
    userLogOut() {
        dispatch(logOut());
    },
    getCountryList() {
        dispatch(fetchCountryList());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticatedContentContainer);
