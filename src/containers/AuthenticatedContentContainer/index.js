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
import { logOut } from '../../actions/async/authentication';
import endpoints from '../../endpoints/authentication';
import { headerHeight, USER_TYPE } from '../../constants';
import classes from './styles.scss';

class AuthenticatedContentContainer extends Component {
    constructor() {
        super();
        this.state = {
            heightContainer: '100px',
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
        this.setState({ heightContainer });
    }

    signOut() {
        this.props.userLogOut();
    }

    render() {
        const { heightContainer } = this.state;
        const { userDashboard } = this.props;

        if (isEmpty(userDashboard)) {
            return null;
        }
        const styles = {
            header: {
                paddingLeft: 0,
            },
            container: {
                backgroundColor: grey100,
                margin: '50px 0px 0px 0px',
                padding: 0,
                minHeight: heightContainer,
            },
        };

        return (
          <BrowserRouter>
            <div>
              <Header
                styles={styles.header}
                signOut={this.signOut}
                profilepicurl={userDashboard.profilepicurl}
              />
              <div className={classes.mainContainer} style={styles.container}>
                <ReactCSSTransitionGroup
                  transitionName=""
                  transitionAppear
                  transitionAppearTimeout={1500}
                  transitionEnterTimeout={0}
                  transitionLeave={false}
                >
                    <AdminRoutes />
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
