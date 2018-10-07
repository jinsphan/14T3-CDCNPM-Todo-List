import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from "react-redux";
import numeral from "numeral";
import HeaderPage from '../../../components/HeaderPage/HeaderPage'
import SidebarGuest from '../../../components/SidebarGuest/SidebarGuest'
import ToursModel from '../../../../../services/api/model/Tours'
import './TourDetail.scss'
import Post from '../../../../../components/Post/Post'
class TourDetail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data : {}
    }
  }
  componentWillMount(){
    const id = this.props.params.id;
    ToursModel.findById(id).then((res)=>{
      this.setState({
        data :res.data,
      })
    })
  }
  render () {
    const { settings } = this.props;
    const { data } = this.state;
    return (
      <div style={{background:'#ffffff'}}>
        {
          data.id &&
          <div>
            <HeaderPage title={data.title}/>
            <div className="container">
              <div className="row p-b-30">
                <div className="col-lg-9">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="product-info">
                        <ul>
                          <li><strong>Khởi hành: </strong>{data.placestart}</li>
                          <li><strong>Điểm đến: </strong>{data.destination}</li>
                          <li><strong>Kiểu: </strong>{data.type==='travel'? ' Thuê xe du lịch': ' Thuê xe theo tuyến'}</li>
                          <li><strong>Phí cầu đường: </strong>{numeral(data.charge).format('0,0')} VND</li>
                          <li><strong>Giá thuê {data.duration} : </strong>{numeral(data.price).format('0,0')} VND</li>
                          <li><strong>Quãng đường: </strong>{numeral(data.distance).format('0,0')} Km</li>
                          {/*<li><strong>Phụ trội ngoài giờ : 60</strong>.000đ/1h</li>*/}
                          {/*<li><strong>Phụ trội quá km : 6</strong>.000đ/1km</li>*/}
                          {/*<li><strong>Sử dụng cuối tuần : </strong>200.000đ</li>*/}
                          {/*<li><strong>Sử dụng lể tết : </strong>x 200%</li>*/}
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <img src={data.image} className="img-responsive" alt=""/>
                    </div>
                    {
                      data.description ?
                        <div className="col-lg-12 col-md-12 p-t-30 p-b-30">
                          <Post content={data.description}/>
                        </div>
                        : null
                    }

                  </div>
                </div>
                <div className="col-lg-3 ">
                  <SidebarGuest settings={settings}/>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return ({
    settings : state.site.settings
  })
}
export default connect(mapStateToProps, null)(TourDetail)
