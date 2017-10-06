import React, { PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import c from 'classnames';
import JwPlayer from '../JwPlayer';
import classes from './style.scss';

function VideoDialog(props) {
    const { selectedVideoData } = props;
    return (
      <div>
        <Dialog
          open={props.isOpen}
          onRequestClose={props.handleClose}
          contentClassName={classes.videoContentClass}
          bodyClassName={classes.videoBody}
          autoScrollBodyContent
          repositionOnUpdate
        >
          <button
            className={c('material-icons', classes.closeVideoDialog)}
            onClick={props.handleClose}
          >
            clear
          </button>
          <div className={classes.playerWrapper}>
            <JwPlayer
              url={selectedVideoData.videoUrl}
              thumbnail={selectedVideoData.thumbnailUrl}
            />
          </div>
          <h2 className={classes.videoDialogTitle}>
            {selectedVideoData.videoName}
          </h2>
          <p className={classes.videoDialogDetails}>
            {selectedVideoData.videoDescription}
          </p>
        </Dialog>
      </div>
    );
}

VideoDialog.propTypes = {
    selectedVideoData: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
};

export default VideoDialog;
