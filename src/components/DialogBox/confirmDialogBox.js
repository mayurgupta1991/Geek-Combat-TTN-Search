import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import styles from './styles';
import classes from './styles.scss';

export default function ConfirmDialogBox(props) {
    const {
        dialogMessage,
        handleCloseDialog,
        changeStatus,
        publicVideoUrl,
        cancelButtonText,
        confirmButtonText,
        customWidth,
    } = props;
    const actionsStatusChange = [
      <RaisedButton
        label={<FormattedMessage id={cancelButtonText} />}
        onTouchTap={handleCloseDialog()}
        className={classes.button}
      />,
      <RaisedButton
        label={<FormattedMessage id={confirmButtonText} />}
        primary
        onTouchTap={changeStatus()}
        style={styles.confirmButton}
        className={classes.button}
      />,
    ];
    return (
      <Dialog
        actions={actionsStatusChange}
        modal={false}
        open
        contentStyle={{ width: customWidth }}
        onRequestClose={handleCloseDialog()}
        bodyStyle={styles.titleStyle}
        actionsContainerStyle={styles.actionsContainerStyle}
        contentClassName={classes.contentClass}
      >
        <div>
          <FormattedMessage id={dialogMessage} />
          <div className={classes.publicVideoSpan}>
            {publicVideoUrl}
          </div>
        </div>
      </Dialog>
    );
}

ConfirmDialogBox.defaultProps = {
    publicVideoUrl: '',
    cancelButtonText: 'cancel',
    confirmButtonText: 'confirm',
    customWidth: '40%',
};

ConfirmDialogBox.propTypes = {
    dialogMessage: PropTypes.string.isRequired,
    publicVideoUrl: PropTypes.string,
    cancelButtonText: PropTypes.string,
    confirmButtonText: PropTypes.string,
    customWidth: PropTypes.string,
    handleCloseDialog: PropTypes.func.isRequired,
    changeStatus: PropTypes.func.isRequired,
};
