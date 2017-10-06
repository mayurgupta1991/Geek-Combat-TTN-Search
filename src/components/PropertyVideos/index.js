import React, { PropTypes } from 'react';
import VideoCarousel from './VideoCarousel';
import classes from './style.scss';

function PropertyVideos(props) {
    const { newVideos, previewContent } = props;
    const propertyData = Object.keys(newVideos).map(videoCategory => {
        const videoData = newVideos[videoCategory] && newVideos[videoCategory].length ? (
          <section className={classes.videoSlider} key={videoCategory} >
            <div>
              <h3 className={classes.sliderHeader}>
                {videoCategory}
                <span className={classes.categoryVideos}>({newVideos[videoCategory].length})</span>
              </h3>
              <VideoCarousel videoList={newVideos[videoCategory]} previewContent={previewContent} />
            </div>
          </section>
        ) : null;
        return videoData;
    });
    return (
      <div className={classes.propertyVideoContainer}>
        {propertyData}
      </div>
    );
}

PropertyVideos.propTypes = {
    newVideos: PropTypes.object.isRequired,
    previewContent: PropTypes.func.isRequired,
};

export default PropertyVideos;
