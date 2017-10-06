import React, { PropTypes } from 'react';
import { withRouter } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import { FormattedMessage } from 'react-intl';
import classes from './styles.scss';
import style from './styles';

function Header({ styles, signOut, history }) {
    return (
        <div>
            <AppBar
                style={{ ...styles, ...style.appBar }}
                iconElementLeft={
            <IconButton style={style.menuButton} />
          }
                iconElementRight={
            <div style={style.iconsRightContainer}>
                <div
                    className={classes.logoutButton}
                    onClick={() => { history.push('/'); signOut(); }}
                >
                    <i className="material-icons">
                        input
                    </i>
                    <FormattedMessage id="signOut" />
                </div>
            </div>
          }
            />
        </div>
    );
}

Header.propTypes = {
    styles: PropTypes.object.isRequired,
    signOut: PropTypes.func.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }).isRequired,
};

export default withRouter(Header);
