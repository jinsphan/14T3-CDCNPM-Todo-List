import React, { Component } from 'react'
import {connect} from "react-redux";
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
// components
import HeaderPage from '../../components/HeaderPage/HeaderPage'
import SidebarGuest from '../../components/SidebarGuest/SidebarGuest'
import Post from '../../../../components/Post/Post'
import LoadPages from '../../../../components/LoadPages/LoadPages'
// services
import NewsModel from '../../../../services/api/model/News'
// styles
import './NewsDetail.scss'
class NewsDetail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      dataShow: {
        'du-lich': 'Thông tin du lịch miền trung',
        'xe':'Tin tức về xe'
      },
      data :{},
    }
  }
  componentWillMount(){
    const id = this.props.params.id;
    NewsModel.findById(id).then((res)=>{
      this.setState({
        data : res.data,
      })
    })
  }
  render () {
    const { settings } = this.props;
    const { data } = this.state;
    return (
      <div>
        {
          !data.id ? <LoadPages/> :
          <div className="white-box">
            <HeaderPage title={data.title}/>
            <Helmet>
              <title>{data.title}-Thuê xe TTB</title>
            </Helmet>
            <div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-9">
                    <img src={data.image} className="img-responsive" alt=""/>
                    <Post content={data.content}/>
                  </div>
                  <div className="col-lg-3">
                    <SidebarGuest settings={settings} />
                  </div>
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
export default connect(mapStateToProps, null)(NewsDetail)
