import React, { Component } from 'react'
import './SidebarGuest.scss'
class SidebarGuest extends Component {
  render () {
    const { settings } = this.props;
    return (
      <div className="side-bar row hidden-md">
        <div className="col-lg-12 col-md-6">
          <h4 className="m-b-20"><strong>LIÊN HỆ</strong></h4>
          <div className='widget-info'>
            <i className='fa fa-home' />
            {settings.address} <br />
            <hr />
            <i className='fa fa-phone-square' /> Tel:
            {settings.phone}
            <br />
            <hr />
            <i className='fa fa-phone-square' /> Hotline : {settings.hotLine}
            <br />
            <hr />
            <i className='fa fa-envelope-o' />
            Email: {settings.email}
            <br /><br />
          </div>
        </div>
        <hr/>
        <div className="col-lg-12 col-md-6">
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
        </div>

      </div>
    )
  }
}
export default SidebarGuest
