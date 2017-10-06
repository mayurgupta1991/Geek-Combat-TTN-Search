import React, { Component, PropTypes } from 'react';

class JwPlayer extends Component {
    constructor() {
        super();
        this.updateVideoUrl = this.updateVideoUrl.bind(this);
    }

    componentDidMount() {
        const { url, thumbnail } = this.props;
        this.updateVideoUrl(url, thumbnail);
    }

    updateVideoUrl(file, image) {
        window.jwplayer('videoPlayer').setup({
            file,
            image,
            autostart: true,
        });
    }

    render() {
        return (
          <div id="videoPlayer" />
        );
    }
}

JwPlayer.propTypes = {
    url: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
};

export default JwPlayer;
