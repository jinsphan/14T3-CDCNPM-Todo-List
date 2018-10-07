import React,{Component} from 'react'
import {Link, browserHistory } from 'react-router'
import './ListItem.scss'
import numeral from 'numeral'
import CarModel from "../../../../services/api/model/Cars";
import ToursModel from "../../../../services/api/model/Tours";

export default class ListItem extends Component{
  constructor(props){
    super(props);
    this.state = {
      listItem: [],
      type : ''
    }
  }
  componentWillMount(){
    this.getList(this.props.type)
  }
  componentWillReceiveProps(nextProps) {
    if(this.props.type !== nextProps.type ){
      const type = nextProps.type || '';
      this.getList(type)
    }
  }
  truncateText = (selector, maxLength) =>{
    if (selector.length > maxLength) {
      selector = selector.substr(0,maxLength) + '...';
    }
    return selector;
  }
  getList = (type) => {
    switch (type){
      case 'du-lich' :
        return ToursModel.findByDistance().then(res => {
          this.setState({listItem: res.data, type : 'tours'})
        });
      case 'tu-lai' :
        return CarModel.findBySelfDriving().then(res => {
          this.setState({listItem: res.data, type : 'cars'})
        });
        case 'hop-dong' :
        return CarModel.findBySelfContract().then(res => {
          this.setState({listItem: res.data, type : 'cars'})
        });
      default:
        return CarModel.find().then(res => {
          this.setState({listItem: res.data, type : 'cars'})
        });
    }
  }
  render(){
    const { listItem, type } = this.state;
    return(
      <div className="">
        {
          listItem.length > 0  && <div className="container p-t-40 p-b-40 list-product">
            <div className="text-center m-b-40">
              <h2 className="text-uppercase">BẢNG GIÁ CHO THUÊ XE TẠI TTB</h2>
            </div>
            <div className="row">
              {
                type === 'cars' ? listItem.length>0
                  && listItem.map((car,index)=>{
                    return(
                      <div className="col-lg-4 col-md-6" key={index}>
                        <div className="card product-item">
                          <div className="card-body">
                            <div className="text-center">
                              <img
                                src={car.image}
                                style={{ maxHeight: 130}}
                                className="img-responsive m-b-20"
                              />
                            </div>
                            <h4><strong>{car.name}</strong></h4>
                            <ul className="product-item__info">
                              <li>
                                <i className="fa fa-chevron-circle-right"/>
                                <strong>Hiệu :</strong>{car.brand}
                              </li>
                              <li>
                                <i className="fa fa-chevron-circle-right"/>
                                <strong>Đời xe :</strong>{car.model}
                              </li>
                              <li>
                                <i className="fa fa-chevron-circle-right"/>
                                <strong>Kiểu xe :</strong>{car.type}
                              </li>
                              <li>
                                <i className="fa fa-chevron-circle-right"/>
                                <strong>Màu xe :</strong>{car.color}
                              </li>
                              <li>
                                <i className="fa fa-chevron-circle-right"/>
                                <strong>Giá thuê :</strong>{numeral(car.price).format('0,0')}đ / {car.duration}
                              </li>
                            </ul>
                            <button
                              onClick={()=>{
                                browserHistory.push(
                                  {
                                    pathname :`/chi-tiet-xe/${car.id}`,
                                    state :{ car}
                                  }
                                )
                              }}
                              className="button btn btn-success form-control">Xem chi tiết</button>
                          </div>
                        </div>
                      </div>
                    )
                  })
                  : listItem.length>0
                  && listItem.map((tours,index)=>{
                    return(
                      <div className="col-lg-3 col-md-4" key={index}>
                        <div className="card product-item tours-item">
                          <div className="card-body">
                            <div className="text-center m-b-20">
                              <img
                                src={tours.image}
                                className="img-responsive"
                              />
                            </div>
                            <div className="tours-item-info">
                              <h5><strong>{this.truncateText(tours.title,17)}</strong></h5>
                              <ul className="product-item__info">
                                <li>
                                  <i className="fa fa-chevron-circle-right"/>
                                  <strong>Giá thuê :</strong>{numeral(tours.price).format('0,0')}đ
                                </li>
                              </ul>
                              <button
                                onClick={()=>{
                                  browserHistory.push(
                                    {
                                      pathname :`/chi-tiet-tour/${tours.id}`,
                                      state :{ tours}
                                    }
                                  )
                                }}
                                className="button btn btn-success">Xem chi tiết</button>
                            </div>

                          </div>
                        </div>
                      </div>
                    )
                  })
              }

              <div className="col-lg-12 text-center text-uppercase">
                <button
                  className="btn btn-lg list-product-btn__bottom"
                  onClick={()=>{
                    browserHistory.push('/lien-he')
                  }}
                >
                  Liên hệ thuê xe ngay
                </button>
              </div>
            </div>
          </div>

        }
      </div>
    )
  }
}
