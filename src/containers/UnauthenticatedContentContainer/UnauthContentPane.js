import React, { Component, PropTypes } from 'react';
import Login from '../../components/Auth/Login';

class UnauthContentPane extends Component {
    constructor() {
        super();
    }
    render() {
        return (
          <Login />
        );
    }
}
export default UnauthContentPane;
