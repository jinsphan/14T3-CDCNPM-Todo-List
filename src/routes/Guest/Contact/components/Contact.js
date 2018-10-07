import React, { Component } from 'react'
import {connect} from "react-redux";
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
//components
import HeaderPage from '../../components/HeaderPage/HeaderPage'
import FormRegisterGuest from '../../components/FormRegisterGuest/FormRegisterGuest'
import MapWithAMarker from '../../../../components/Map/MapWithAMarker'
// styles
import './Contact.scss'

class Contact extends Component {
  constructor (props) {
    super(props)
    this.state = {
      location :{
        lat: 16.075174,
        lng: 108.221753,
      }
    }
  }
  render () {
    const { settings } = this.props;
    return (
      <div className="white-box contact">
        <HeaderPage title={'Liên hệ'}/>
        <Helmet>
        <title>Liên hệ thuê xe-Thuê xe TTB</title>
        </Helmet>
        <div className="container">
          <div className="row p-b-40">
            <div className="col-lg-12 contact-content p-b-30 ">
              <p>Thuê xe TTB xin trân trọng cám ơn Quý khách hàng, các cá nhân đã quan tâm và ủng hộ dịch vụ cho thuê xe của chúng tôi. Hy vọng chúng tôi sẽ tiếp tục nhận được sự tin tưởng và đồng hành của Quý khách trong thời gian tới. Chúng tôi cam kết sẽ đáp ứng tất cả yêu cầu đa dạng về thuê xe với chất lượng dịch vụ chuyên nghiệp, uy tín.</p>
              <p>Rất hân hạnh được phục vụ quý khách.</p>
            </div>
            <div className="col-lg-6 p-b-30">
              <h3 className="m-b-30"><strong>Liên hệ Dịch vụ cho thuê xe </strong></h3>
              <div className="contact-box ">
                <table className="table-box table-hover">
                  <tbody>
                  <tr>
                    <td className="contact-box__left"><strong>Địa chỉ:</strong></td>
                    <td className="contact-box__right">
                      <strong>Dịch vụ cho thuê xe TTB </strong>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>{settings.address}</td>
                  </tr>
                  <tr>
                    <td className="contact-box__left"><strong>Điện thoại:</strong></td>
                    <td className="contact-box__right">{settings.phone}</td>
                  </tr>
                  <tr>
                    <td className="contact-box__left"><strong>Hotline:</strong></td>
                    <td className="contact-box__right hot-line">
                      <strong> {settings.hotLine}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="contact-box__left"><strong>Email:</strong></td>
                    <td className="contact-box__right">{settings.email}</td>
                  </tr>
                  </tbody>
                </table>
                <MapWithAMarker location={this.state.location}/>
              </div>
            </div>
            <div className="col-lg-6 p-b-30"><FormRegisterGuest/></div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return ({
    settings : state.site.settings
  })
};
export default connect(mapStateToProps, null)(Contact)
