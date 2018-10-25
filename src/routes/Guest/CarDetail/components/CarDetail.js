import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from "react-redux";
import numeral from "numeral";
import HeaderPage from '../../components/HeaderPage/HeaderPage'
import SidebarGuest from '../../components/SidebarGuest/SidebarGuest'
import CarsModel from '../../../../services/api/model/Cars'
import './CarDetail.scss'
import Post from '../../../../components/Post/Post'
class CarDetail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data : {}
    }
  }
  componentWillMount(){
    const id = this.props.params.id;
    CarsModel.findById(id).then((res)=>{
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
          this.state.data.id &&
          <div>
            <HeaderPage title={this.state.data.name}/>
            <div className="container">
              <div className="row p-b-30">
                <div className="col-lg-9">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="product-info">
                        <ul>
                          <li><strong>Hiệu : </strong>{data.brand}</li>
                          <li><strong>Đời xe : </strong>{data.model}</li>
                          <li><strong>Kiểu xe : </strong>{data.type}</li>
                          <li><strong>Màu xe : </strong>{data.color}</li>
                          <li><strong>Giá thuê ngày : </strong>{numeral(data.price).format('0,0')} VND</li>
                          {/*<li><strong>Ngày sử dụng : </strong>26 ngày</li>*/}
                          {/*<li><strong>Phụ trội ngoài giờ : 60</strong>.000đ/1h</li>*/}
                          {/*<li><strong>Phụ trội quá km : 6</strong>.000đ/1km</li>*/}
                          {/*<li><strong>Sử dụng cuối tuần : </strong>200.000đ</li>*/}
                          {/*<li><strong>Sử dụng lể tết : </strong>x 200%</li>*/}
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <img src={this.state.data.image} className="img-responsive" alt=""/>
                    </div>
                    {
                      this.state.data.guildContent ?
                        <div className="col-lg-12 col-md-12 p-t-30 p-b-30">
                          <Post content={this.state.data.guildContent}/>
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
export default connect(mapStateToProps, null)(CarDetail)
