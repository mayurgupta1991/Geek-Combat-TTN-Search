import React, { PropTypes } from 'react';
import { withRouter } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
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
                <span
                    className={classes.logoutButton}
                    onClick={() => { history.push('/'); signOut(); }}
                >
                    <FormattedMessage id="signOut" />
                </span>
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
