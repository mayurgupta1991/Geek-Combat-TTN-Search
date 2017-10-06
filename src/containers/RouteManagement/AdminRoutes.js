import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Profile from '../ProfileContainer';
import UserManagement from '../UserManagement';
import MetaTags from '../MetaTagManagement';
import VideoUploader from '../VideoUploader';
import VideoManagement from '../VideoManagement';
import PropertyManagement from '../PropertyManagement';
import PropertyFormPage from '../../components/PropertyFormPage';
import PairDevicesFormPage from '../../components/PairDevicesFormPage';
import UserFormPage from '../../components/UserFormPage';
import DeviceManagement from '../DeviceManagement';
import DeviceFormPage from '../../components/DeviceFormPage';
import TermsOfService from '../../components/TermsOfService';
import PrivacyPolicy from '../../components/PrivacyPolicy';
import LinkDevice from '../LinkDevice';
import NoMatch from '../NoMatchContainer';

export default function AuthContentPane() {
    return (
      <Switch>
        <Route exact path="/" component={VideoManagement} />
        <Route path="/profile" component={Profile} />
        <Route path="/users" component={UserManagement} />
        <Route path="/tags" component={MetaTags} />
        <Route path="/form/:user" component={UserFormPage} />
        <Route path="/videoUpload" component={VideoUploader} />
        <Route path="/property/form/:property" component={PropertyFormPage} />
        <Route path="/property/pair/devices/:pid" component={PairDevicesFormPage} />
        <Route path="/property" component={PropertyManagement} />
        <Route path="/devices" component={DeviceManagement} />
        <Route path="/device/form/:device" component={DeviceFormPage} />
        <Route path="/tos" component={TermsOfService} />
        <Route path="/policy" component={PrivacyPolicy} />
        <Route path="/link" component={LinkDevice} />
        <Route component={NoMatch} />
      </Switch>
    );
}
