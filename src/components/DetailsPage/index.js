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
              <figure className={ classes.logoImgWrapper }>
                  <div className={ classes.picture_cropper }>
                      <div className={ classes.bg_img_visible_content }>
                          <div className={ classes.bg_img_cropper }>
                              <div className={ classes.pic_cropper_target }>
                                  <img
                                      src={'https://media-exp2.licdn.com/media/AAEAAQAAAAAAAAcwAAAAJGVjNTcyNTZmLTI4NDctNDUwZC05NzUwLWYxMTE4MDc0MmU0OA.jpg'}
                                  />
                              </div>
                          </div>
                      </div>
                  </div>
              </figure>

              <div className={ classes.details }>
                 <div className={ classes.overView }>
                    <img
                        className={ classes.overViewLogo }
                        src={'https://media-exp2.licdn.com/mpr/mpr/shrink_100_100/p/1/000/07f/283/290a400.png'}
                        alt="TTN"
                    />
                    <div className={ classes.overViewDescription }>
                        <h2> HDFC Life </h2>
                        <p> Insurance  Mumbai, Maharashtra  78,174 followers</p>
                    </div>
                 </div>
                  <div className={ classes.aboutUs }>
                    <h3>About us</h3>
                    <p>
                        HDFC Life, one of India’s leading private life insurance companies, offers a range of individual and group insurance solutions. It is a joint venture between Housing Development Finance Corporation Limited (HDFC), India’s leading housing finance institution and Standard Life plc, the leading provider of financial services in the United Kingdom.
                        <br /> <br />
                        HDFC Life’s product portfolio comprises solutions, which meet various customer needs such as Protection, Pension, Savings, Investment and Health. Customers have the added advantage of customizing the plans, by adding optional benefits called riders, at a nominal price. The company currently has 37 retail and 8 group products in its portfolio, along with 9 optional riders catering to the savings, investment, protection and retirement needs of customers.
                        <br /> <br />
                        HDFC Life continues to have one of the widest reaches among new insurance companies with about 500 branches in India touching customers in over 900 cities and towns. The company has also established a liaison office in Dubai. HDFC Life has a strong presence in its existing markets with a strong base of Financial Consultants. For more information, please visit our website, www.hdfclife.com
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
