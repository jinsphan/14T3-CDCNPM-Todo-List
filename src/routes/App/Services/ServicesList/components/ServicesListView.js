import React, { Component } from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'
import numeral from "numeral";
// components
import LazyLoad from 'react-lazy-load'
import PageTitle from '../../../../../components/Elements/PageTitle'
import ModalImage from '../../../../../components/Modal/ModalImage'
import Alert, { confirmAlert } from '../../../../../components/Alert/index'
// services
import ServiveModel from '../../../../../services/api/model/Services'
// styles
import './ServicesListView.scss'
class ServicesListView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      services: [],
      isOpen: false,
      avatars : []

    }
  }
  componentWillMount () {
    this.loadData()
    const avatars = []
    const imgVisa = require('./assets/Visa.png')
    const translate = require('./assets/translate.jpg')
    const airTicket = require('./assets/ari-ticket.png')
    avatars.push(imgVisa)
    avatars.push(translate)
    avatars.push(airTicket)
    this.setState({
      avatars
    })
  }
  loadData = () => {
    ServiveModel.find()
      .then(res => {
        this.setState({services: res.data})
      })
  }
  render () {
    const { services,avatars } = this.state;
    return (
      <div className='container-fluid'>
        <PageTitle
          title='Danh sách dịch vụ'
          button ={
            []
          }
        />
        <div className="row el-element-overlay">
          {
            services.length > 0 && services.map( (item,index) => (
              <div key={item.id} className="col-lg-4 col-md-4">
                <div className="card box-cars-list">
                  <div className="el-card-item">
                    <div className="el-card-avatar el-overlay-1">
                      <LazyLoad debounce={false} offsetTop={1000} >
                        <div style={{ overflow:'hidden', padding: 20, height: 200 }}>
                          <img className='card-img-top' style={{ width: '100%' }} src={avatars[index]} alt='Card image cap' />
                        </div>
                      </LazyLoad>
                      <div className="el-overlay">
                        <ul className="el-info">
                          {/*<li>*/}
                            {/*<a*/}
                              {/*className="btn default btn-outline image-popup-vertical-fit"*/}
                              {/*href="javascript:void(0);"*/}
                              {/*onClick={() => this.openModalImage(item)}*/}
                            {/*>*/}
                              {/*<i className="icon-magnifier"/>*/}
                            {/*</a>*/}
                          {/*</li>*/}
                          <li>
                            <Link
                              to={`/app/services/services-edit/${item.id}`}
                              className="btn default btn-outline">
                              <i className="icon-pencil"/>
                            </Link>
                          </li>
                          {/*<li>*/}
                            {/*<a*/}
                              {/*href="javascript:void(0)"*/}
                              {/*onClick={()=>{*/}
                                {/*this.deleteCar(item.id)*/}
                              {/*}}*/}
                              {/*className="btn default btn-outline">*/}
                              {/*<i className="icon-close"/>*/}
                            {/*</a>*/}
                          {/*</li>*/}
                        </ul>
                      </div>
                    </div>
                    {/*<div className="el-card-content">*/}
                      {/*<h3 className="box-title">{item.name}</h3>*/}
                      {/*<div className="box-content">*/}
                        {/*<p>Hiệu: {item.brand}</p>*/}
                        {/*<p>Đời xe: {item.model}</p>*/}
                        {/*<p>Kiểu: {item.type}</p>*/}
                        {/*<p>Màu: {item.color}</p>*/}
                        {/*<p>Giá tiền: {numeral(item.price).format('0,0')} VND</p>*/}
                        {/*<p>Thời lượng: {item.duration}</p>*/}
                      {/*</div>*/}
                    {/*</div>*/}
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}
export default ServicesListView
