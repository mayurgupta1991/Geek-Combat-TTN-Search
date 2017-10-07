import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import classes from './style.scss';

class DetailsPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className={ classes.detailsWrapper }>
              <img  className={ classes.logoImg } src={require('../../public/company_bg.jpg')} alt="TTN" />
              <div className={ classes.details }>
                 <div className={ classes.overView }>
                    <img  className={ classes.overViewLogo } src={require('../../public/logo_detail.png')} alt="TTN" />
                    <div className={ classes.overViewDescription }>
                        <p> TTN </p>
                        <p> BLAHHH BLAHHHHHHHH  LOLZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ</p>
                    </div>
                 </div>
                  <div className={ classes.aboutUs }>
                    <h3>About us</h3>
                    <p>
                        Tata Consultancy Services is an IT services,
                        consulting and business solutions organization that delivers real results to global business,
                        ensuring a level of certainty no other firm can match. TCS offers a consulting-led,
                        integrated portfolio of IT, BPS,infrastructure, engineering and assurance services.
                        This is delivered through its unique Global Network Delivery Model™,
                        recognized as the benchmark of excellence in software development.
                        A part of the Tata group, India’s largest industrial conglomerate,
                        TCS has over 387,000 of the world’s best-trained consultants in 45 countries.
                        The company generated consolidated revenues of US $18.2 billion for year ended March 31, 2017 and
                        is listed on the BSE Limited and National Stock
                    </p>
                  </div>
              </div>
          </div>
        );
    }
}

DetailsPage.propTypes = {
    content: PropTypes.object.isRequired,
};

function mapStateToProps(reduxState) {
    return {
        details: reduxState.details,
    }
}

export default connect(mapStateToProps)(DetailsPage);
