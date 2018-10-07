import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Helmet from 'react-helmet'
// components
import IntroWhyChooseMe from '../../components/IntroWhyChooseMe/IntroWhyChooseMe'
import LoadPages from '../../../../components/LoadPages/LoadPages'
import ListItem from '../../components/ListItem/ListItem'
import Partner from '../../components/Partner/Partner'

import CarModel from '../../../../services/api/model/Cars'
import data from './RentCar.json'
// styles
import './RentCar.scss'
class RentCar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data : {},
    }
  }
  componentWillMount(){
    const pageCurrent = data.filter( item => item.params === this.props.params.id)[0]
    this.setState({
      data :pageCurrent,
    })
  }
  componentWillReceiveProps(nextProps){
    data.forEach((item)=>{
      if (item.params === nextProps.params.id){
        this.setState({
          data :item,
        })
      }
    })
  }
  getTitle = () => {
    switch (this.props.params.id){
      case 'hop-dong' : return ( <Helmet>
        <title>Thuê xe hợp đồng-Thuê xe TTB</title>
      </Helmet>);
      case 'tu-lai' : return ( <Helmet>
        <title>Thuê xe tự lái-Thuê xe TTB</title>
      </Helmet>);
      case 'du-lich' : return ( <Helmet>
        <title>Thuê xe du lịch-Thuê xe TTB</title>
      </Helmet>)
    }
  }
  handleBanner = () => {
    const url= require('./images/insurance-new-drivers.jpg');
    const { settings} = this.props
    switch (this.props.params.id){
      case 'hop-dong' : return settings.bannerRentCars;
      case 'tu-lai' : return settings.bannerRentCarsRoute;
      case 'du-lich' : return settings.bannerRentCarsTravel;
      default: return url
    }
  }
  render () {
    const { data} =this.state;
    return (
      <div>
        {this.getTitle()}
        <div>
          <div className="p-t-40 p-b-40 hidden-md"
               style={{
                 backgroundImage : `url(${this.handleBanner()})`,
                 backgroundSize:'cover',
                 backgroundAttachment:'fixed',
                 minHeight: '500px',
                 position: 'relative'
               }}
          >
            <div className='banner-content'>
              <h2>{data.title}</h2>
            </div>
          </div>
          <div className="intro-thuexe">
            <div className="p-t-40 p-b-40">
              {
                data.title && <div className="container m-t-40 m-b-40">
                  <div className="row">
                    <div className="col-lg-2">
                    </div>
                    <div className="col-lg-8">
                      <div className="header-content m-b-40">
                        <div className="text-center">
                          <h1><strong>{data.title}</strong></h1>
                        </div>
                      </div>
                      <div className="header-line">
                        <div className="position-relative header-line__line">
                          <div className="introduce-box-icon icon-line">
                            <i className="fa fa-car"/>
                          </div>
                        </div>
                      </div>
                      <div className="intro-content">
                        <p>{data.description}</p>
                        <p style={{ fontWeight: 700}}>{data.reason}</p>
                        {
                          data.content.map( ( contentItem, index ) => (
                            <p key={index}>{contentItem}</p>
                          ))
                        }
                      </div>
                      {
                        data.params === 'tu-lai' ?
                          <div className="intro-content row">
                            <div className="col-md-12" >
                              <p style={{ fontWeight: 700, color :'#dd1d21'}}>{data.rules}
                              </p>
                              </div>

                            <div className="col-md-6">
                              <p style={{ fontWeight: 700}}>{data.descriptionCompany}</p>
                              {
                                data.contentCompany.map( ( contentItem, index ) => (
                                  <p key={index}>{contentItem}</p>
                                ))
                              }
                            </div>
                            <div className="col-md-6">
                              <p style={{ fontWeight: 700}}>{data.descriptionSingle}</p>
                              {
                                data.contentSingle.map( ( contentItem, index ) => (
                                  <p key={index}>{contentItem}</p>
                                ))
                              }
                            </div>

                          </div> : null
                      }
                      <div className="text-center">
                        <button className="btn form-control"><strong>GỌI NGAY 0987 877 888 (Ms. Hương)</strong></button>
                      </div>
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
          {data.title && <ListItem type={this.props.params.id}/>}
          <div className="white-box">
            <IntroWhyChooseMe/>
          </div>
          <Partner/>
          <div className="white-box">
            <div className="cam-ket">
              <div className="container p-t-40 p-b-40">
                <div className="cam-ket__title text-center">
                  <h1><strong>CAM KẾT TỪ CHÚNG TÔI</strong></h1>
                </div>
                <div className="row">
                  <div className="col-lg-3 text-center">
                    <img src={require('./images/about-feature.jpg')} className="img-responsive" alt=""/>
                    <h5 className="text-center"><strong>Thương hiệu xe nổi tiếng</strong></h5>
                  </div>
                  <div className="col-lg-3 text-center">
                    <img src={require('./images/about-feature2.jpg')} className="img-responsive" alt=""/>
                    <h5 className="text-center"><strong>Hợp đồng lâu và uy tín</strong></h5>
                  </div>
                  <div className="col-lg-3 text-center">
                    <img src={require('./images/about-feature4.jpg')} className="img-responsive" alt=""/>
                    <h5 className="text-center"><strong>Có nhiều loại xe</strong></h5>
                  </div>
                  <div className="col-lg-3 text-center">
                    <img src={require('./images/about-feature3.jpg')} className="img-responsive" alt=""/>
                    <h5 className="text-center"><strong>Số 01 về dịch vụ cho thuê xe</strong></h5>
                  </div>
                  <div className="col-md-3"></div>
                  <div className="col-md-6">
                    <button className="btn btn-lg form-control"><strong>GỌI NGAY: 0987 877 888 (Ms. Hương)</strong></button>
                  </div>
                  <div className="col-md-3"></div>
                </div>
              </div>
            </div>
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
}
export default connect(mapStateToProps, null)(RentCar)
