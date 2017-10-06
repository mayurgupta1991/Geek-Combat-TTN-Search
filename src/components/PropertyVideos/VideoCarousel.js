import React, { PropTypes } from 'react';
import Slider from 'react-slick';
import c from 'classnames';
import NextArrow from './nextArrowCarrousel';
import PrevArrow from './prevArrowCarrousel';
import './style.ignoreHash.css';
import classes from './style.scss';

function VideoCarousel(props) {
    const { videoList, previewContent } = props;
    const settings = {
        speed: 500,
        slidesToShow: 4,
        draggable: false,
        slidesToScroll: 1,
        arrows: true,
        infinite: false,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    return (
      <div>
        {
          <Slider {...settings}>
            {
              videoList && videoList.map((item, i) => (
                <div
                  style={{ width: '50px' }}
                  key={`${item.videoName}_${i}`}
                >
                  <figure className={classes.thumbnailContainer}>
                    <img src={item.thumbnailUrl} />
                    <div className={classes.playContainerOverlay} />
                    <div className={classes.playContainer} onClick={() => previewContent(item)}>
                      <i className={c('material-icons', classes.playIcon)}>
                        play_arrow
                      </i>
                    </div>
                  </figure>
                  <div className={classes.videoTitle}>
                    {item.videoName}
                  </div>
                </div>
              ))
            }
          </Slider>
        }
      </div>
    );
}

VideoCarousel.propTypes = {
    videoList: PropTypes.array.isRequired,
    previewContent: PropTypes.func.isRequired,
};

export default VideoCarousel;
