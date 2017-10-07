import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import GoogleLogin from 'react-google-login';
import classnames from 'classnames';
import { FormattedMessage } from 'react-intl';
import LoadingIndicator from '../../LoadingIndicator';
import { socialLogin } from '../../../actions/async/authentication';
import { changeDashboardLoadingStatus } from '../../../actions/common';
import endpoints from '../../../endpoints/authentication';
import styles from './styles';
import classes from './styles.scss';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            showLoader: false,
            showAuthenticateError: '',
            cookiesError: false,
        };
        this.socialLoginData = {
            token: '',
        };
        this.handleResponse = this.handleResponse.bind(this);
        this.responseGoogle = this.responseGoogle.bind(this);
        this.showGoogleApiError = this.showGoogleApiError.bind(this);
        console.log(endpoints.GOOGLE_CLIENT_ID);
    }

    handleResponse(response, errorText) {
        if (response.status !== 200) {
            this.setState({ showLoader: false, showAuthenticateError: errorText });
        } else {
            this.props.changeDashboardState({ status: true });
        }
    }

    responseGoogle(googleUser) {
        const { accessToken } = googleUser;
        if (accessToken) {
            this.setState({ showLoader: true });
            this.socialLoginData.token = accessToken;
            const errorText = 'googleauthErrorText';
            this.props.social_authenticate(endpoints.googleAuthPath, this.socialLoginData).then(
                response => this.handleResponse(response, errorText),
            );
        }
    }

    showGoogleApiError(googleError) {
        const { error } = googleError;
        const { cookiesError } = this.state;

        if (cookiesError) {
            if (error) {
                this.setState({ showAuthenticateError: 'googleCookieErrorText' });
            } else {
                this.setState({ cookiesError: false, showAuthenticateError: '' });
            }
        } else {
            if (error === 'idpiframe_initialization_failed') {
                this.setState({ cookiesError: true });
            } else {
                this.setState({ cookiesError: false });
            }
        }
    }

    render() {
        const { showLoader, showAuthenticateError, cookiesError } = this.state;
        const { cookieUrl } = this.props;
        const googleBtnClass = classnames(classes.btn, classes.btnGoogle);
        const loadingIndicator = showLoader ? <LoadingIndicator /> : null;
        return (
          <div>
            {
              cookiesError ?
                (
                  <div className={classes.cookiesError}>
                    <FormattedMessage id="cookiesError" />
                    <a
                      href={cookieUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FormattedMessage id="enableCookie" />
                    </a>
                  </div>
                ) : null
            }
            <div className={classes.boxContainer}>
              { loadingIndicator }
              <Paper style={styles.paper}>
                <div className={classes.logoContainer} />
                  <div className={googleBtnClass}>
                      <i className="fa fa-google-plus fa-lg" />
                      <FormattedMessage id="login" />
                      <GoogleLogin
                          clientId={endpoints.GOOGLE_CLIENT_ID}
                          className={classes.hideButton}
                          autoLoad={false}
                          onSuccess={this.responseGoogle}
                          onFailure={this.showGoogleApiError}
                      />
                  </div>
                {
                    showAuthenticateError ? (
                      <div className={classes.authFailContainer}>
                        <p style={styles.errorMessage}>
                          <FormattedMessage id={showAuthenticateError} />
                        </p>
                      </div>
                    ) : null
                }
              </Paper>
            </div>
          </div>
        );
    }
}

Login.propTypes = {
    social_authenticate: PropTypes.func.isRequired,
    changeDashboardState: PropTypes.func.isRequired,
    cookieUrl: PropTypes.string.isRequired,
};

const mapStateToProps = reduxState => {
    return {
        cookieUrl: reduxState.runtimeSettings.cookieUrl,
    };
};

const mapDispatchToProps = dispatch => ({
    social_authenticate(url, data) {
        return dispatch(socialLogin(url, data));
    },
    changeDashboardState(loadingStatus) {
        dispatch(changeDashboardLoadingStatus(loadingStatus));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
