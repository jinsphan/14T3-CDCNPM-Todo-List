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
import ToursModel from '../../../../../services/api/model/Tours'
// styles
import './ToursListView.scss'
class ToursListView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tours: [],
      isOpen: false,
    }
  }
  componentWillMount () {
    this.loadData()
  }
  loadData = () => {
    ToursModel.find()
      .then(res => {
        this.setState({tours: res.data})
      })
  }
  deleteTours = (id) => {
    confirmAlert(
      'Xác nhận',
      'Bạn muốn xóa tours được chọn',
      'Có',
      'Không',
      () => {
        ToursModel.deleteById(id)
          .then(res => {
            this.loadData()
          })
      })
  }
  render () {
    const { tours, isOpen } = this.state;
    const button =[{
      name: 'Tạo mới tours',
      value: '/app/tours/tours-add'
    }]
    return (
      <div className='container-fluid'>
        <PageTitle
          title='Danh sách tours '
          button ={
            button
          }
        />
        <div className="row el-element-overlay">
          {
            tours.length > 0 && tours.map( item => (
              <div key={item.id} className="col-lg-3 col-md-6">
                <div className="card box-cars-list">
                  <div className="el-card-item">
                    <div className="el-card-avatar el-overlay-1">
                      <LazyLoad debounce={false} offsetTop={1000} >
                        <div style={{ overflow:'hidden', padding: 20, height: 150 }}>
                          <img className='card-img-top' style={{ width: '100%' }} src={item.image} alt='Card image cap' />
                        </div>
                      </LazyLoad>
                      <div className="el-overlay">
                        <ul className="el-info">
                          <li>
                            <Link
                              className="btn default btn-outline image-popup-vertical-fit"
                              to={{
                                pathname : `/app/tours/tours-detail/${item.id}`,
                                state : item
                              }}
                            >
                              <i className="icon-magnifier"/>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={`/app/tours/tours-edit/${item.id}`}
                              className="btn default btn-outline">
                              <i className="icon-pencil"/>
                            </Link>
                          </li>
                          <li>
                            <a
                              href="javascript:void(0)"
                              onClick={()=>{
                                this.deleteTours(item.id)
                              }}
                              className="btn default btn-outline">
                              <i className="icon-close"/>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="el-card-content">
                      <h3 className="box-title">{item.title}</h3>
                      <div className="box-content">
                        <p>Kiểu: {item.type === 'travel' ? ' Thuê xe du lịch': ' Thuê xe theo tuyến'}</p>
                        <p>Giá tiền: {numeral(item.price).format('0,0')} VND</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
          <div className='col-md-12 m-t-30 m-b-30'>
            <ul className='pagination justify-content-center'>
              <li className='page-item disabled'>
                <Link className='page-link'><i className='fa fa-angle-left' /></Link>
              </li>
              <li className='page-item active'>
                <Link className='page-link' >1 <span className='sr-only'>(current)</span></Link>
              </li>
              <li className='page-item'><Link className='page-link' >2</Link></li>
              <li className='page-item'><Link className='page-link' >3</Link></li>
              <li className='page-item'><Link className='page-link' >4</Link></li>
              <li className='page-item'><Link className='page-link' >5</Link></li>
              <li className='page-item'>
                <Link className='page-link' ><i className='fa fa-angle-right' /></Link>
              </li>
            </ul>
          </div>
      </div>
    )
  }
}
export default ToursListView
