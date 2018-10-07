import React, { Component } from 'react'
import './Sidebar.scss'
class Sidebar extends Component {
  constructor (props) {
    super(props)

  }
  render () {
    return (
      <div className="side-bar">
        <h4><strong>LIÊN HỆ PHÚ KHANG</strong></h4>
        <img src={require('../assets/altis2-1.png')} className="img-responsive" alt=""/>
        <hr/>
        <h4><strong>DỊCH VỤ THUÊ XE OTO</strong></h4>
        <ul>
          <li><i className="fa fa-caret-square-o-right"/>
            <a href="">Thuê xe hợp đồng năm</a>
          </li>
          <li><i className="fa fa-caret-square-o-right"/>
            <a href="">Thuê xe hợp đồng tháng</a>
          </li>
          <li><i className="fa fa-caret-square-o-right"/>
            <a href="">Thuê xe du lịch</a>
          </li>
        </ul>
        <hr/>
        <a href="">
          Xem Thêm Tin Tức
        </a>
      </div>
    )
  }
}
export default Sidebar
