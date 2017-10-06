import React, { Component, PropTypes } from 'react';
import c from 'classnames';
import classes from './style.scss';

class MobileView extends Component {
    constructor(props) {
        super(props);
        const { newVideos } = this.props;
        const videoCategories = Object.keys(newVideos).filter(cat => newVideos[cat] && newVideos[cat].length);
        const activeVideos = newVideos[videoCategories[0]];
        this.state = {
            videoCategories,
            activeCategory: videoCategories[0],
            activeVideos,
        };
        this.headerWidth = Math.round((100 / videoCategories.length) * 100) / 100;
        this.updateVideos = this.updateVideos.bind(this);
    }

    updateVideos(activeCategory) {
        const { newVideos } = this.props;
        this.setState({ activeCategory, activeVideos: newVideos[activeCategory] });
    }

    render() {
        const { previewContent } = this.props;
        const { videoCategories, activeCategory, activeVideos } = this.state;
        const mobileHeaerOptions = videoCategories.map(category => (
          <div
            className={c(
              classes.mobileHeadOptions,
              { [classes.activeOption]: category === activeCategory },
            )}
            key={category}
            style={{ width: `${this.headerWidth}%` }}
            onClick={() => this.updateVideos(category)}
          >
            {category}
          </div>
        ));
        return (
          <div className={classes.mobileVideoWrapper}>
            <div className={classes.mobileHeader}>
              {mobileHeaerOptions}
            </div>
            <div className="row">
              {(activeVideos.map((list, i) => (
                <div
                  className={c('col-xs-12', classes.videoContentContainer)}
                  key={`${list.videoName}_${i}`}
                >
                  <figure className={classes.thumbnailContainer}>
                    <img src={list.thumbnailUrl} />
                    <div className={classes.playContainerOverlay} />
                    <div className={classes.playContainer} onClick={() => previewContent(list)}>
                      <i className={c('material-icons', classes.videoPlay)}>
                        play_arrow
                      </i>
                    </div>
                  </figure>
                  <div className={classes.videoTitle}>
                    {list.videoName}
                  </div>
                  <div className={classes.videoDescription}>
                    {list.videoDescription}
                  </div>
                </div>
              )))}
            </div>
          </div>
        );
    }
}

MobileView.propTypes = {
    newVideos: PropTypes.object.isRequired,
    previewContent: PropTypes.func.isRequired,
};

export default MobileView;
