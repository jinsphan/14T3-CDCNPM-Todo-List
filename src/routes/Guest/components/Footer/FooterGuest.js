import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import moment from 'moment'
import NewsModel from '../../../../services/api/model/News'
import './FooterGuest.scss'

export default class Footer extends Component {
  constructor () {
    super();
    this.state = {
      data : []
    }
  }
  componentDidMount(){
    NewsModel.findNew().then((res)=>{
      this.setState({
        data :res.data,
      })
    })
  }
  render () {
    const {address, email, phone, hotLine } = this.props.settings;
    return (
      <footer className='footer-bar'>
        <div className='container'>
          <div className='footer-bar__top'>
            <div className='row'>
              <div className='col-lg-3  col-md-6 footer-bar__info'>
                <div className='footer-bar__title' >LIÊN HỆ</div>
                <div className='widget-info'>
                  <i className='fa fa-home' />
                  Địa chỉ: {address}
                  <br />
                  <hr />
                  <i className='fa fa-phone-square' />
                  Tel:{phone}
                  <br />
                  <hr />
                  <i className='fa fa-phone-square' />
                  Hotline: {hotLine}
                  <br />
                  <hr />
                  <i className='fa fa-envelope-o' />
                  Email: {email}
                  <br />
                </div>
              </div>
              <div className='col-lg-3 col-md-6 footer-bar__news' >
                <div className='footer-bar__title' >TIN TỨC MỚI</div>
                {
                  <ul>
                    {this.state.data.map((news,index)=>{
                      return(
                        <li key={index}>
                          <div className='table-cell'>
                            <a href='javascript:void(0)'>
                              <img src={news.image} alt='' width={40} height={40} />
                            </a>
                          </div>
                          <div className='post-content'>
                            <Link to={`/tin-tuc/${news.type}/${news.id}`}>{news.title}</Link>
                            <br />
                            <p><small>{news.created ? moment(new Date(parseInt(news.created,10))).format('MM/DD/YYYY') : '10-06-2018'}</small></p>
                          </div>
                        </li>
                      )
                    })
                    }
                  </ul>
                }

              </div>
              <div className='col-lg-3 col-md-6 footer-bar__service' >
                <div className='footer-bar__title' >Dịch vụ</div>
                <ul>
                  <li onClick={()=> { browserHistory.push('/thue-xe/nam') }}><i className='ti-angle-right' /><a href="">Thuê xe hợp đồng</a></li>
                  <li onClick={()=> { browserHistory.push('/thue-xe/theo-tuyen') }}><i className='ti-angle-right' /><a href="">Thuê xe theo tuyến</a></li>
                  <li onClick={()=> { browserHistory.push('/thue-xe/du-lich') }}><i className='ti-angle-right' /><a href="">Thuê xe du lịch</a></li>
                  <li onClick={()=> { browserHistory.push('/dich-vu/lam-visa') }}><i className='ti-angle-right' /><a href="">Dịch vụ khác</a></li>
                </ul>
              </div>
              <div className='col-lg-3 col-md-6 footer-bar__connect' >
                <div className='footer-bar__title' >KẾT NỐI FACEBOOK</div>
                <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FDichvuThueXeTTB%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width={340} style={{border: 'none', overflow: 'hidden', height:'130px'}} scrolling="no" frameBorder={0} allowTransparency="true" />
                </div>
            </div>
          </div>
        </div>
        <div className='footer-bar__bottom'>
          <div className='container'>
            <p>Bản quyền thuộc về Thuê Xe TTB<Link to="/login"><i className="fa fa-sign-in"/>Login</Link>
            </p>
          </div>
        </div>
      </footer>
    )
  }
}
Footer.propTypes = {
}
