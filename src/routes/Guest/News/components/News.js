import React, { Component } from 'react'
import HeaderPage from '../../components/HeaderPage/HeaderPage'
import SidebarGuest from '../../components/SidebarGuest/SidebarGuest'
import ListNews from './ListNews/ListNews'
import Helmet from 'react-helmet'
import './News.scss'
import {connect} from "react-redux"

const dataShow = {
    'du-lich-mien-trung': 'Thông tin du lịch miền trung',
    'thong-tin-thue-xe':'Tin tức về xe',
    'tin-tuc-va-su-kien' :'Tin tức về TTB'
  }
class News extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data:[],
      LoadingData : false
    }
  }
  getTitle = (title) => {
    switch (title){
      case 'du-lich-mien-trung' : return ( <Helmet>
        <title>Du lịch miền trung-Thuê xe TTB </title>
        </Helmet>)
      case 'thong-tin-thue-xe' : return ( <Helmet>
        <title>Thông tin thuê xe-Thuê xe TTB </title>
        </Helmet>)
      case 'tin-tuc-va-su-kien' : return ( <Helmet>
        <title>Tin tức và sự kiện-Thuê xe TTB </title>
        </Helmet>)
    }
  }

  render () {
    const { settings } = this.props;
    const {id} = this.props.params;
    return (
      <div className="white-box">
        <HeaderPage title={dataShow[id]}/>
        {
          this.getTitle(id)
        }
        <div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                {
                  this.state.LoadingData ? null :
                    <ListNews data={this.state.data} params={id}/>
                }
              </div>
              <div className="col-lg-4">
                <SidebarGuest settings={settings}/>
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
export default connect(mapStateToProps, null)(News)
