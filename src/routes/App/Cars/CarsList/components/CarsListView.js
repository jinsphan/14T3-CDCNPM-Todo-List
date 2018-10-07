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
import CarsModel from '../../../../../services/api/model/Cars'
// styles
import './CarsListView.scss'
class CarsListView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cars: [],
      isOpen: false,
      carItem: {}
    }
  }
  componentWillMount () {
    this.loadData()
  }
  componentWillReceiveProps(nextProps){
    this.loadData()

  }
  loadData = () => {
    const formRent = this.props.params.formRent;
    CarsModel.find()
      .then(res => {
        const cars = res.data.filter( item => item.formRent === formRent)
        this.setState({cars})
      })
  }
  openModalImage = (carItem) => {
    this.setState({isOpen: true, carItem})
  }
  deleteCar = (id) => {
    confirmAlert(
      'Xác nhận',
      'Bạn muốn xóa xe được chọn',
      'Có',
      'Không',
      () => {
        CarsModel.deleteById(id)
          .then(res => {
            this.loadData()
          })
      })
  }
  render () {
    const { cars, isOpen, carItem } = this.state;
    const button =[{
      name: 'Tạo mới xe',
      value: '/app/cars/car-add'
    }]
    return (
      <div className='container-fluid'>
        <PageTitle
          title='Danh sách xe'
          button ={
            button
          }
        />
        <ModalImage title={carItem.name} isOpen={isOpen} image={carItem.image} style={'large'}/>
        <div className="row el-element-overlay">
          {
            cars.length > 0 && cars.map( item => (
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
                            <a
                              className="btn default btn-outline image-popup-vertical-fit"
                              href="javascript:void(0);"
                              onClick={() => this.openModalImage(item)}
                            >
                              <i className="icon-magnifier"/>
                            </a>
                          </li>
                          <li>
                            <Link
                              to={`/app/cars/car-edit/${item.id}`}
                              className="btn default btn-outline">
                              <i className="icon-pencil"/>
                            </Link>
                          </li>
                          <li>
                            <a
                              href="javascript:void(0)"
                              onClick={()=>{
                                this.deleteCar(item.id)
                              }}
                              className="btn default btn-outline">
                              <i className="icon-close"/>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="el-card-content">
                      <h3 className="box-title">{item.name}</h3>
                      <div className="box-content">
                        <p>Hiệu: {item.brand}</p>
                        <p>Đời xe: {item.model}</p>
                        <p>Kiểu: {item.type}</p>
                        <p>Màu: {item.color}</p>
                        <p>Giá tiền: {numeral(item.price).format('0,0')} VND</p>
                        <p>Thời lượng: {item.duration}</p>
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
export default CarsListView
