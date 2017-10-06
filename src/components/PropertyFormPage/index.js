import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { TextField, SelectField, MenuItem, AutoComplete, RaisedButton, FontIcon } from 'material-ui';
import ReactTooltip from 'react-tooltip';
import get from 'lodash/get';
import trim from 'lodash/trim';
import c from 'classnames';
import PropertyContent from './propertyContent';
import PageBase from '../../components/PageBase';
import LinkItem from '../LinkItem';
import classesForm from '../UserFormPage/styles.scss';
import classes from '../VideoUploadComponents/VideoGeoLocation/styles.scss';
import LoadingIndicator from '../LoadingIndicator';
import VideoDialog from '../VideoDialog';
import { AUTO_COMPLETE_PROPERTY_SOURCE_CONFIG, AUTO_COMPLETE_CITY_SOURCE_CONFIG, USER_TYPE } from '../../constants';
import { fetchStateList, fetchCityList, getCityName } from '../../actions/async/location';
import { emptyCityList } from '../../actions/locationList';
import { getGeoLocation } from '../../util/browserStorage';
import {
    fetchLanguagesName,
    fetchLanguagesCategories,
    uploadPropertyInformation,
} from '../../actions/async/propertyManagement';
import {
    emptyVideoInfo,
    addNewContent,
    handleContentInput,
    deleteLinkVideoContent,
    validateLinkVideosData,
    populateVideoAssociationList,
    emptyDisplayOrder,
} from '../../actions/propertyInformation';
import { fetchVideoData } from '../../actions/async/videoManagement';
import { createVideoData } from '../../actions/videoList';
import styles from './styles';

class PropertyManagement extends Component {
    constructor(props) {
        super(props);
        const propertyId = props.match.params.property;
        const { propertyList } = props;
        let propertyInfo = {};
        if (propertyList.length) {
            propertyList.forEach(item => {
                if (item.id === parseInt(propertyId, 10)) {
                    propertyInfo = item;
                }
            });
        }
        this.state = {
            showLoader: true,
            propertyInfo,
            propertyName: get(propertyInfo, 'propertyName', ''),
            propertyId: get(propertyInfo, 'id', 0),
            countryId: get(propertyInfo, 'country', ''),
            stateId: get(propertyInfo, 'state', ''),
            cityId: get(propertyInfo, 'city', ''),
            streetAddress: get(propertyInfo, 'streetAddress') || '',
            postalcode: get(propertyInfo, 'postalcode') || '',
            latitude: get(propertyInfo, 'latitude') || '',
            longitude: get(propertyInfo, 'longitude') || '',
            videoAssociationList: get(propertyInfo, 'videoAssociationList', []),
            searchtext: '',
            allDataValid: false,
            isActive: get(propertyInfo, 'isActive', true),
            cityErrorLabel: '',
            stateErrorLabel: '',
            countryErrorLabel: '',
            propertyNameErrorLabel: '',
            streetErrorLabel: '',
            streetMinLengthError: false,
            saveDetails: true,
            showVideoDetails: false,
            currentVideoId: '',
            citySearchText: '',
        };
        this.getTagsTimer = 0;
        this.getCityTimer = 0;
        this.cancelVideoRequest = null;
        this.cancelCityRequest = null;
        this.errorMessages = {
            propertyError: <FormattedMessage id="propertyError" />,
            cityError: <FormattedMessage id="cityError" />,
            stateError: <FormattedMessage id="stateError" />,
            countryError: <FormattedMessage id="countryError" />,
            streetError: <FormattedMessage id="streetError" />,
        };
        this.previewContent = this.previewContent.bind(this);
        this.deleteRow = this.deleteRow.bind(this);
        this.validateData = this.validateData.bind(this);
        this.handleNewRequest = this.handleNewRequest.bind(this);
        this.handleCityInput = this.handleCityInput.bind(this);
        this.handleCityRequest = this.handleCityRequest.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleCountryChange = this.handleCountryChange.bind(this);
        this.closePreviewContent = this.closePreviewContent.bind(this);
        this.updateLatLong = this.updateLatLong.bind(this);
        this.checkStreetLength = this.checkStreetLength.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleVideosInputChange = this.handleVideosInputChange.bind(this);
        this.handleAutoCompleteInput = this.handleAutoCompleteInput.bind(this);
    }
    componentWillMount() {
        ReactTooltip.hide();
        const { history, isFormPageValid, clearVideoOrder } = this.props;
        clearVideoOrder();
        if (!isFormPageValid) {
            history.push('/property');
        }
    }
    componentDidMount() {
        const { getLanguageCategories, getStateList, getCity, populateData } = this.props;
        const { countryId, cityId, videoAssociationList } = this.state;
        getLanguageCategories().then(response => {
            if (response.status === 200) {
                this.setState({ showLoader: false });
            }
        });
        if (countryId) {
            getStateList(countryId).then(() => {
                if (cityId) {
                    getCity(cityId).then(citySearchText => {
                        this.setState({ citySearchText }, () => {
                            this.updateLatLong();
                        });
                    });
                }
            });
        }
        if (videoAssociationList.length) {
            populateData(videoAssociationList);
        }
        ReactTooltip.rebuild();
    }
    componentWillReceiveProps(newProps) {
        this.setState({ allDataValid: newProps.isAllDataValid }, () => {
            if (this.state.allDataValid) {
                this.setState({ showLoader: true });
                const {
                    propertyId,
                    propertyName,
                    countryId,
                    stateId,
                    cityId,
                    isActive,
                    streetAddress,
                    latitude,
                    longitude,
                    postalcode,
                } = this.state;
                const {
                    videoAssociationList,
                    uploadPropertyData,
                } = this.props;
                const updatedAssociationList = videoAssociationList.map(item => {
                    delete item.validationCheck;
                    delete item.isValid;
                    return item;
                });
                uploadPropertyData({
                    cityId,
                    countryId,
                    id: propertyId,
                    isActive,
                    propertyName,
                    stateId,
                    postalcode,
                    latitude,
                    longitude,
                    streetAddress,
                    videoAssociationList: updatedAssociationList,
                }).then(response => {
                    if (response.status === 200) {
                        this.props.history.push('/property');
                    }
                });
            }
        });
    }

    handleAddressChange(e) {
        this.setState({ streetAddress: e.target.value }, () => {
            this.updateLatLong();
        });
    }

    updateLatLong() {
        const { countries, states } = this.props;
        const { citySearchText, streetAddress, countryId, stateId } = this.state;
        if (trim(streetAddress) && streetAddress.length < 5) {
            return false;
        }
        const stateName = states.find(item => item.id === stateId).name;
        const countryName = countries.find(item => item.id === countryId).name;
        const updatedAddress = `${streetAddress}, ${citySearchText}, ${stateName}, ${countryName}`;
        clearTimeout(this.searchLatLngTimer);
        this.setState({ saveDetails: false }, () => {
            this.searchLatLngTimer = setTimeout(() => {
                if (this.cancelSearchRequest) {
                    this.cancelSearchRequest.cancel('Cancel Search Request');
                    this.cancelSearchRequest = null;
                }
                this.cancelSearchRequest = getGeoLocation(updatedAddress).then(res => {
                    this.setState({
                        latitude: res.lat,
                        longitude: res.lng,
                        streetErrorLabel: '',
                        saveDetails: true,
                        streetMinLengthError: false,
                    });
                }).catch(() => {
                    this.setState({
                        latitude: '',
                        longitude: '',
                        streetErrorLabel: this.errorMessages.streetError,
                        saveDetails: false,
                        streetMinLengthError: false,
                    });
                });
            }, 200);
        });
        return true;
    }

    previewContent(id) {
        ReactTooltip.hide();
        const { currentVideoId } = this.state;
        const { getVideoContent, updateVideoContent } = this.props;
        if (currentVideoId !== id) {
            updateVideoContent();
            getVideoContent(id);
            this.setState({ currentVideoId: id });
        }
        this.setState({ showVideoDetails: true });
    }

    closePreviewContent() {
        this.setState({ showVideoDetails: false });
    }

    handleAutoCompleteInput(hintText) {
        if (trim(hintText)) {
            this.setState({ searchText: hintText });
            clearTimeout(this.getTagsTimer);
            this.getTagsTimer = setTimeout(() => {
                if (this.cancelVideoRequest) {
                    this.cancelVideoRequest.cancel('Cancel Video Request');
                    this.cancelVideoRequest = null;
                }
                this.cancelVideoRequest = this.props.getPropertyNames(hintText);
            }, 200);
        } else {
            if (this.cancelVideoRequest) {
                this.cancelVideoRequest.cancel('Cancel Video Request');
                this.cancelVideoRequest = null;
            }
            this.props.emptyVideoSearch();
        }
    }

    handleNewRequest(chosenRequest) {
        const { addVideoContent } = this.props;
        if (chosenRequest === Object(chosenRequest)) {
            addVideoContent(chosenRequest);
        }
        this.setState({ searchText: '' });
    }

    handleInputChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value,
                [`${event.target.name}ErrorLabel`]: '',
                showSubmitError: '',
                showSubmitSuccess: false,
            },
        );
    }

    handleCountryChange(e, index, selectedCountryId) {
        const { countries } = this.props;
        const { countryId } = this.state;
        this.setState({ countryErrorLabel: '' });
        const countryName = countries.find(item => (item.id === selectedCountryId));
        if (countryId !== selectedCountryId) {
            this.setState({
                countryId: selectedCountryId,
                countryName: countryName.name,
                stateName: '',
                stateId: '',
                cityId: '',
                citySearchText: '',
                showLoader: true,
            });
            this.props.removeCity();
            this.props.getStateList(selectedCountryId).then(() => {
                this.setState({ showLoader: false });
            });
        }
    }

    handleStateChange(e, index, selectedStateId) {
        const { stateId } = this.state;
        const { states } = this.props;
        this.setState({ stateErrorLabel: '' });
        const stateName = states.find(item => (item.id === selectedStateId));
        if (stateId !== selectedStateId) {
            this.props.removeCity();
            this.setState({
                stateId: selectedStateId,
                stateName: stateName.name,
                cityId: '',
                citySearchText: '',
            });
        }
    }

    handleCityInput(citySearchText) {
        const { stateId } = this.state;
        this.setState({ citySearchText, cityErrorLabel: '', cityId: '' });
        if (trim(citySearchText) && stateId) {
            clearTimeout(this.getCityTimer);
            this.getCityTimer = setTimeout(() => {
                if (this.cancelCityRequest) {
                    this.cancelCityRequest.cancel('Cancel City Request');
                    this.cancelCityRequest = null;
                }
                this.cancelCityRequest = this.props.getCityList({ stateId, regionId: '', citySearchText });
            }, 200);
        } else {
            if (this.cancelCityRequest) {
                this.cancelCityRequest.cancel('Cancel City Request');
                this.cancelCityRequest = null;
            }
            this.props.removeCity();
        }
    }

    handleCityRequest(chosenRequest) {
        const { cities } = this.props;
        let citySearchText = '';
        let cityId = 0;
        if (typeof chosenRequest === 'object' && cities.length) {
            citySearchText = chosenRequest.name;
            cityId = chosenRequest.id;
        }
        this.setState({ citySearchText, cityId, cityErrorLabel: '', streetAddress: '' }, () => {
            this.updateLatLong();
        });
    }

    handleVideosInputChange(e, index, value, keyIndex, name) {
        this.props.handleLanguageChange(keyIndex, value, name);
    }

    deleteRow(keyIndex) {
        ReactTooltip.hide();
        this.props.deleteVideoContent(keyIndex);
    }

    checkStreetLength() {
        const { streetAddress } = this.state;
        if (streetAddress && (trim(streetAddress).length < 5)) {
            this.setState({ streetMinLengthError: true });
            return false;
        }
        this.setState({ streetMinLengthError: false });
        return true;
    }

    validateData() {
        const { countryId, stateId, cityId, citySearchText, propertyName, saveDetails } = this.state;
        const { validateLinkVideos } = this.props;
        if (
            cityId &&
            trim(citySearchText) &&
            stateId && saveDetails &&
            countryId &&
            trim(propertyName) &&
            this.checkStreetLength()
        ) {
            validateLinkVideos();
        } else {
            if (!cityId || !trim(citySearchText)) {
                this.setState({ cityErrorLabel: this.errorMessages.cityError });
            }
            if (!stateId) {
                this.setState({ stateErrorLabel: this.errorMessages.stateError });
            }
            if (!countryId) {
                this.setState({ countryErrorLabel: this.errorMessages.countryError });
            }
            if (!trim(propertyName)) {
                this.setState({ propertyNameErrorLabel: this.errorMessages.propertyError });
            }
        }
    }
    render() {
        const {
            showLoader,
            propertyName,
            countryId,
            stateId,
            citySearchText,
            searchText,
            streetAddress,
            postalcode,
            cityErrorLabel,
            stateErrorLabel,
            countryErrorLabel,
            propertyNameErrorLabel,
            streetErrorLabel,
            showVideoDetails,
            latitude,
            longitude,
            streetMinLengthError,
        } = this.state;
        const {
            countries,
            states,
            cities,
            videoCategory,
            videoAssociationList,
            displayOrderCategory,
            videoNameHintSearch,
            userRole,
        } = this.props;
        const loadingIndicator = showLoader ? <LoadingIndicator /> : null;
        const propertyNameText = <FormattedMessage id="propertyNameText" />;
        const countryTextValue = <FormattedMessage id="country" />;
        const stateTextValue = <FormattedMessage id="state" />;
        const cityTextValue = <FormattedMessage id="city" />;
        const PostalCodeTextValue = <FormattedMessage id="PostalCodeTextValue" />;
        const searchVideoText = <FormattedMessage id="searchVideoText" />;
        const videoNameHint = <FormattedMessage id="videoNameHint" />;
        const streetTextValue = <FormattedMessage id="street" />;
        const streetSearchHintText = <FormattedMessage id="streetSearch" />;
        const latitudeTextValue = <FormattedMessage id="latitude" />;
        const longitudeTextValue = <FormattedMessage id="longitude" />;
        const streetMinLengthErrorLabel = streetMinLengthError ? <FormattedMessage id="streetError" /> : null;
        const autocompleteClass = c(classesForm.autoCompleteWrapper, { [classesForm.autoCompleteDisabled]: !stateId }, 'col-xs-12 col-sm-4');
        return (
          <PageBase
            title={<FormattedMessage id="propertyForm" />}
            navigation={<FormattedMessage id="breadCrumbs.property" />}
            minHeight={300}
          >
            {loadingIndicator}
            <div>
              <div className="row">
                <div className="col-xs-12">
                  <h3 className={classesForm.tagHeader}>
                    <FormattedMessage id="linkVideos" />
                  </h3>
                  <div>
                    <div className="row">
                      <div className="col-xs-12">
                        <div>
                          <AutoComplete
                            hintText={videoNameHint}
                            floatingLabelText={searchVideoText}
                            dataSource={videoNameHintSearch}
                            onUpdateInput={this.handleAutoCompleteInput}
                            onNewRequest={this.handleNewRequest}
                            filter={AutoComplete.caseInsensitiveFilter}
                            dataSourceConfig={AUTO_COMPLETE_PROPERTY_SOURCE_CONFIG}
                            listStyle={styles.autoCompleteList}
                            style={styles.autoCompleteStyle}
                            searchText={searchText}
                            openOnFocus
                            fullWidth
                            animated
                          />
                        </div>
                      </div>
                    </div>
                    {
                      (videoAssociationList && videoAssociationList.map((item, i) => (
                        <PropertyContent
                          key={i}
                          keyIndex={i}
                          videoCategory={videoCategory}
                          videoAssociationList={videoAssociationList}
                          displayOrderCategory={displayOrderCategory}
                          deleteRow={this.deleteRow}
                          handleVideosInputChange={this.handleVideosInputChange}
                          previewContent={this.previewContent}
                        />
                      )))
                    }
                  </div>
                </div>
                <div className="col-xs-12">
                  <TextField
                    name="propertyName"
                    hintText={propertyNameText}
                    className={classesForm.requiredFields}
                    floatingLabelText={propertyNameText}
                    fullWidth
                    value={propertyName}
                    onChange={this.handleInputChange}
                    errorText={propertyNameErrorLabel}
                    maxLength="100"
                    autoComplete="off"
                  />
                </div>
                <div className="col-xs-12 col-sm-4">
                  <SelectField
                    floatingLabelText={countryTextValue}
                    hintText={countryTextValue}
                    value={countryId}
                    onChange={this.handleCountryChange}
                    className={classesForm.requiredFields}
                    errorText={countryErrorLabel}
                    fullWidth
                  >
                    {
                      (
                        countries.length &&
                        countries.map(item => (
                          <MenuItem key={item.id} value={item.id} primaryText={item.name} />
                        ))
                      )
                    }
                  </SelectField>
                </div>
                <div className="col-xs-12 col-sm-4">
                  <SelectField
                    floatingLabelText={stateTextValue}
                    hintText={stateTextValue}
                    value={stateId}
                    onChange={this.handleStateChange}
                    className={classesForm.requiredFields}
                    errorText={stateErrorLabel}
                    fullWidth
                  >
                    {
                      (
                        states.length &&
                        states.map(item => (
                          <MenuItem key={item.id} value={item.id} primaryText={item.name} />
                        ))
                      )
                    }
                  </SelectField>
                </div>
                <div className={autocompleteClass}>
                  <AutoComplete
                    hintText={cityTextValue}
                    floatingLabelText={cityTextValue}
                    searchText={citySearchText}
                    onUpdateInput={this.handleCityInput}
                    onNewRequest={this.handleCityRequest}
                    dataSource={cities}
                    dataSourceConfig={AUTO_COMPLETE_CITY_SOURCE_CONFIG}
                    listStyle={styles.autoCompleteList}
                    filter={AutoComplete.caseInsensitiveFilter}
                    errorText={cityErrorLabel}
                    openOnFocus
                    fullWidth
                    animated
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-7">
                  <TextField
                    name="address"
                    floatingLabelText={streetTextValue}
                    hintText={streetSearchHintText}
                    value={streetAddress}
                    errorText={streetErrorLabel || streetMinLengthErrorLabel}
                    onChange={this.handleAddressChange}
                    autoComplete="off"
                    fullWidth
                  />
                </div>
                {
                  (userRole === USER_TYPE.ADMIN || userRole === USER_TYPE.OPERATOR) ?
                    (
                      <div className={c('col-xs-12 col-sm-6 col-md-5', classes.textContainers)}>
                        <span className={classes.latContent}>
                          <span className={classes.contentColor}>
                            {latitudeTextValue} :
                          </span>{latitude ? latitude.toFixed(2) : null},
                        </span>
                        <span className={classes.contentColor}>
                          {longitudeTextValue} :
                        </span>{longitude ? longitude.toFixed(2) : null}
                      </div>
                    ) : null
                }
              </div>
              <div className="row">
                <div className="col-xs-12">
                  <TextField
                    name="postalcode"
                    hintText={PostalCodeTextValue}
                    floatingLabelText={PostalCodeTextValue}
                    fullWidth
                    value={postalcode}
                    onChange={this.handleInputChange}
                    maxLength="100"
                  />
                </div>
                <div className={c('col-xs-12', classesForm.buttonContainer)}>
                  <LinkItem to={'/property'} linkClass={classesForm.cancelBtn}>
                    <FormattedMessage id="cancel" />
                  </LinkItem>
                  <RaisedButton
                    label={<FormattedMessage id="saveDetails" />}
                    primary
                    className={classesForm.btnSubDetails}
                    icon={<FontIcon className="material-icons">check</FontIcon>}
                    onTouchTap={this.validateData}
                  >
                    <input type="submit" className={classesForm.btnSubmit} />
                  </RaisedButton>
                </div>
              </div>
              <VideoDialog
                showVideoDetails={showVideoDetails}
                closeVideoModal={this.closePreviewContent}
              />
            </div>
          </PageBase>
        );
    }
}

PropertyManagement.defaultProps = {
    countries: [],
    states: [],
    cities: [],
};

PropertyManagement.propTypes = {
    countries: PropTypes.array.isRequired,
    propertyList: PropTypes.array.isRequired,
    states: PropTypes.array.isRequired,
    cities: PropTypes.array.isRequired,
    videoCategory: PropTypes.array.isRequired,
    videoAssociationList: PropTypes.array.isRequired,
    displayOrderCategory: PropTypes.array.isRequired,
    videoNameHintSearch: PropTypes.array.isRequired,
    getPropertyNames: PropTypes.func.isRequired,
    addVideoContent: PropTypes.func.isRequired,
    getLanguageCategories: PropTypes.func.isRequired,
    getStateList: PropTypes.func.isRequired,
    getCityList: PropTypes.func.isRequired,
    getCity: PropTypes.func.isRequired,
    removeCity: PropTypes.func.isRequired,
    handleLanguageChange: PropTypes.func.isRequired,
    deleteVideoContent: PropTypes.func.isRequired,
    validateLinkVideos: PropTypes.func.isRequired,
    uploadPropertyData: PropTypes.func.isRequired,
    populateData: PropTypes.func.isRequired,
    getVideoContent: PropTypes.func.isRequired,
    updateVideoContent: PropTypes.func.isRequired,
    emptyVideoSearch: PropTypes.func.isRequired,
    clearVideoOrder: PropTypes.func.isRequired,
    isFormPageValid: PropTypes.bool.isRequired,
    userRole: PropTypes.string.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }).isRequired,
    match: PropTypes.object.isRequired,
};

const mapStateToProps = reduxState => ({
    countries: reduxState.locationInformation.countries,
    states: reduxState.locationInformation.states,
    cities: reduxState.locationInformation.cities,
    videoAssociationList: reduxState.propertyInformation.videoAssociationList,
    displayOrderCategory: reduxState.propertyInformation.displayOrderCategory,
    videoCategory: reduxState.propertyInformation.videoCategory,
    propertyList: reduxState.propertyInformation.propertyList,
    isAllDataValid: reduxState.propertyInformation.isAllDataValid,
    videoNameHintSearch: reduxState.propertyInformation.videoNameHintSearch,
    isFormPageValid: reduxState.runtimeSettings.isFormPageValid,
    userRole: reduxState.userDashboard.dashboard.role,
});

const mapDispatchToProps = dispatch => ({
    getPropertyNames(hintText) {
        return dispatch(fetchLanguagesName(hintText));
    },
    emptyVideoSearch() {
        return dispatch(emptyVideoInfo());
    },
    getLanguageCategories() {
        return dispatch(fetchLanguagesCategories());
    },
    getStateList(countryId) {
        return dispatch(fetchStateList(countryId));
    },
    getCityList(cityObj) {
        return dispatch(fetchCityList(cityObj));
    },
    getCity(cityId) {
        return dispatch(getCityName(cityId));
    },
    removeCity() {
        dispatch(emptyCityList());
    },
    addVideoContent(data) {
        return dispatch(addNewContent(data));
    },
    handleLanguageChange(keyIndex, value, name) {
        return dispatch(handleContentInput(keyIndex, value, name));
    },
    deleteVideoContent(keyIndex) {
        return dispatch(deleteLinkVideoContent(keyIndex));
    },
    validateLinkVideos() {
        return dispatch(validateLinkVideosData());
    },
    uploadPropertyData(data) {
        return dispatch(uploadPropertyInformation(data));
    },
    populateData(data) {
        return dispatch(populateVideoAssociationList(data));
    },
    getVideoContent(id) {
        dispatch(fetchVideoData(id));
    },
    updateVideoContent() {
        dispatch(createVideoData({}));
    },
    clearVideoOrder() {
        dispatch(emptyDisplayOrder({}));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(PropertyManagement);
