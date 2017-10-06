import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import ReactTooltip from 'react-tooltip';
import { pick, isEmpty } from 'lodash';
import c from 'classnames';
import {
  Popover,
  PopoverAnimationVertical,
  RaisedButton,
  Menu,
  MenuItem,
} from 'material-ui';
import ReactGA from 'react-ga';
import LinkItem from '../../../components/LinkItem';
import PropertyVideos from '../../../components/PropertyVideos';
import VideoDialog from '../../../components/PropertyVideos/videoDialog';
import MobileView from '../../../components/PropertyVideos/mobileView';
import LoadingIndicator from '../../../components/LoadingIndicator';
import fetchVideos from '../../../actions/async/publicVideos';
import classes from './styles.scss';
import styles from './styles';

class PublicVideos extends Component {
    constructor(props) {
        super(props);
        const propertyId = props.match.params.property;
        this.state = {
            showLoader: true,
            isDataLoaded: false,
            currentPage: 1,
            videosToDisplay: 12,
            propertyId,
            heightContainer: '100px',
            messageToShow: 'noContentAvailablePublic',
            errorClass: false,
            openMenu: false,
            openMobileMenu: false,
            showTextContent: true,
            selectedVideoData: null,
            isDialogOpen: false,
        };
        this.updateContentDimensions = this.updateContentDimensions.bind(this);
        this.getVideoList = this.getVideoList.bind(this);
        this.languageMenuHandler = this.languageMenuHandler.bind(this);
        this.languageMobileMenuHandler = this.languageMobileMenuHandler.bind(this);
        this.handleLanguageChange = this.handleLanguageChange.bind(this);
        this.handleMobileLanguageChange = this.handleMobileLanguageChange.bind(this);
        this.hideTextContent = this.hideTextContent.bind(this);
        this.previewContent = this.previewContent.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    componentWillMount() {
        this.getVideoList();
        this.updateContentDimensions();
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateContentDimensions);
        ReactGA.set({ page: window.location.pathname });
        ReactGA.pageview(window.location.pathname);
    }

    componentDidUpdate() {
        ReactTooltip.rebuild();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateContentDimensions);
    }

    getVideoList() {
        const data = pick(this.state, [
            'currentPage',
            'videosToDisplay',
            'propertyId',
        ]);
        this.props.getVideos(data).then(response => {
            if (response.status === 200) {
                this.setState({ showLoader: false, isDataLoaded: true });
            } else if (response.error.response) {
                this.setState({ showLoader: false, messageToShow: response.error.response.data.message, errorClass: true, isDataLoaded: true });
            } else {
                this.setState({ showLoader: false, messageToShow: 'apiError', errorClass: true, isDataLoaded: true });
            }
        });
    }

    updateContentDimensions() {
        const heightContainer = `${window.innerHeight}px`;
        this.setState({ heightContainer });
    }

    languageMenuHandler(event) {
        event.preventDefault();
        this.setState({ openMenu: !this.state.openMenu, anchorEl: event.currentTarget });
    }

    languageMobileMenuHandler(event) {
        event.preventDefault();
        this.setState({ openMobileMenu: !this.state.openMobileMenu, anchorEl: event.currentTarget });
    }

    handleLanguageChange() {
        this.setState({ openMenu: false });
    }

    handleMobileLanguageChange() {
        this.setState({ openMobileMenu: false });
    }

    hideTextContent() {
        this.setState({ showTextContent: false });
    }

    previewContent(selectedVideoData) {
        this.setState({ selectedVideoData, isDialogOpen: true });
    }

    handleClose() {
        this.setState({ isDialogOpen: false });
    }

    render() {
        const { videoList, newVideos, intl } = this.props;
        const {
            heightContainer,
            showLoader,
            isDataLoaded,
            messageToShow,
            errorClass,
            openMenu,
            openMobileMenu,
            anchorEl,
            showTextContent,
            selectedVideoData,
            isDialogOpen,
        } = this.state;
        const hostHeadStart = intl.formatMessage({ id: 'hostHeadStart' });
        const hostHeadText = intl.formatMessage({ id: 'hostHeadText' }, { name: 'Sridhar' });
        const hostSubText = intl.formatMessage({ id: 'hostSubText' });
        const loadingIndicator = showLoader ? <LoadingIndicator /> : null;
        const reponseClass = errorClass ? classes.failure : '';

        return (
          <div className={classes.mainContainer} style={{ minHeight: heightContainer }}>
            {loadingIndicator}
            <div className={classes.headerOuterMain}>
              <div className={classes.headerMain}>
                <LinkItem to={'/'} linkClass={classes.logoHead}>
                  <img src={require('../../../public/logoWeb.png')} />
                </LinkItem>
                {
                  (videoList.length && isDataLoaded) ? (
                    <div className={classes.desktopMenuWrapper}>
                      <RaisedButton
                        onTouchTap={this.languageMenuHandler}
                        label={'ENG'}
                        icon={
                          <i className={c('material-icons', classes.btnIcon)}>
                            {openMenu ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
                          </i>
                        }
                        className={classes.languageButton}
                        labelPosition="before"
                        buttonStyle={styles.buttonStyle}
                        labelStyle={styles.labelStyle}
                        overlayStyle={styles.overlayStyle}
                        style={styles.buttonMainStyle}
                        primary
                      />
                      <Popover
                        open={openMenu}
                        anchorEl={anchorEl}
                        onRequestClose={this.handleLanguageChange}
                        animation={PopoverAnimationVertical}
                      >
                        <Menu
                          autoWidth
                          maxHeight={300}
                        >
                          <MenuItem primaryText="ENG" />
                          <MenuItem primaryText="FRN" />
                          <MenuItem primaryText="CHN" />
                          <MenuItem primaryText="ESP" />
                        </Menu>
                      </Popover>
                    </div>
                  ) : null
                }
              </div>
              {
                (videoList.length && isDataLoaded) ? (
                  <div>
                    <div className={c(classes.upperTextContainer, { [classes.hideContent]: !showTextContent })}>
                      <h2>
                        {hostHeadStart}
                        <span className={classes.headDynamic}>{hostHeadText}</span>
                        <i
                          className={c('material-icons', classes.closeTextContainer)}
                          onClick={this.hideTextContent}
                        >
                          close
                        </i>
                      </h2>
                      <p>
                        <span className={classes.mobileText}>{hostHeadText}</span>
                        {hostSubText}
                      </p>
                    </div>
                    <div className={classes.mobileDropContainer}>
                      <RaisedButton
                        onTouchTap={this.languageMobileMenuHandler}
                        label={'ENG'}
                        icon={
                          <i className={c('material-icons', classes.btnIcon)}>
                            {openMobileMenu ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
                          </i>
                        }
                        className={classes.mobileButton}
                        labelPosition="before"
                        buttonStyle={styles.buttonMobileStyle}
                        labelStyle={styles.labelMobileStyle}
                        overlayStyle={styles.overlayMobileStyle}
                        style={styles.buttonMainMobileStyle}
                        primary
                      />
                      <Popover
                        open={openMobileMenu}
                        anchorEl={anchorEl}
                        onRequestClose={this.handleMobileLanguageChange}
                        animation={PopoverAnimationVertical}
                      >
                        <Menu
                          autoWidth
                          listStyle={styles.menuListStyle}
                          menuItemStyle={styles.menuItemStyle}
                          maxHeight={300}
                        >
                          <MenuItem primaryText="ENG" />
                          <MenuItem primaryText="FRN" />
                          <MenuItem primaryText="CHN" />
                          <MenuItem primaryText="ESP" />
                        </Menu>
                      </Popover>
                      <div className={classes.tvIconOuter} />
                    </div>
                  </div>
                ) : null
              }
            </div>
            {
              (!isEmpty(newVideos)) ? (
                <PropertyVideos newVideos={newVideos} previewContent={this.previewContent} />
              ) : null
            }

            {
              (!isEmpty(newVideos)) ? (
                <MobileView newVideos={newVideos} previewContent={this.previewContent} />
              ) : null
            }

            {
              (isDataLoaded && !videoList.length) ?
                (
                  <div className={c(classes.videoActionResponse, reponseClass)}>
                    <FormattedMessage id={messageToShow} defaultMessage={messageToShow} />
                  </div>
                ) : null
            }
            {
              isDialogOpen ?
                <VideoDialog
                  selectedVideoData={selectedVideoData}
                  handleClose={this.handleClose}
                  isOpen={isDialogOpen}
                /> :
                null
            }
          </div>
        );
    }
}

PublicVideos.propTypes = {
    match: PropTypes.object.isRequired,
    newVideos: PropTypes.object.isRequired,
    getVideos: PropTypes.func.isRequired,
    videoList: PropTypes.array.isRequired,
    intl: intlShape.isRequired,
};

const mapStateToProps = reduxState => ({
    videoList: reduxState.publicVideos.videoList,
    newVideos: reduxState.publicVideos.newVideos,
});

const mapDispatchToProps = dispatch => ({
    getVideos(data) {
        return dispatch(fetchVideos(data));
    },
});

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(PublicVideos));
