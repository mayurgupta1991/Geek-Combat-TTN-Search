import React, { PropTypes } from 'react';
import { withRouter } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import { IconButton, IconMenu, MenuItem, FontIcon } from 'material-ui';
import { FormattedMessage } from 'react-intl';
import classes from './styles.scss';
import style from './styles';

function Header({ styles, signOut, profilepicurl, history }) {
    return (
        <div>
            <AppBar
                style={{ ...styles, ...style.appBar }}
                iconElementLeft={
            <IconButton style={style.menuButton} />
          }
                iconElementRight={
            <div style={style.iconsRightContainer}>
              <IconMenu
                color={style.iconButton.fill}
                iconButtonElement={
                  <IconButton className={classes.leftHandStyles}>
                      <FontIcon color={style.iconButton.fill} className="material-icons">
                          settings
                        </FontIcon>
                  </IconButton>
                }
                targetOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
              >
                <MenuItem
                  primaryText={
                    <FormattedMessage id="addProject" />
                  }
                />
              </IconMenu>
              <IconMenu
                iconButtonElement={
                  <IconButton className={classes.buttonStyles}>
                    <img src={profilepicurl} />
                  </IconButton>
                }
                targetOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
              >
                <MenuItem
                  primaryText={
                    <FormattedMessage id="signOut" />
                  }
                  onClick={() => { history.push('/'); signOut(); }}
                />
              </IconMenu>
            </div>
          }
            />
        </div>
    );
}

Header.propTypes = {
    styles: PropTypes.object.isRequired,
    signOut: PropTypes.func.isRequired,
    profilepicurl: PropTypes.string.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }).isRequired,
};

export default withRouter(Header);
