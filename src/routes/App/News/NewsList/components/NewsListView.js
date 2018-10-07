import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import PropTypes from 'prop-types'
// components
import LazyLoad from 'react-lazy-load'
import PageTitle from '../../../../../components/Elements/PageTitle'
import ModalImage from '../../../../../components/Modal/ModalImage'

import Alert, { confirmAlert } from '../../../../../components/Alert/index'
// services
import NewsModel from '../../../../../services/api/model/News'
// styles
import './NewsListView.scss'
class NewsListView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      news: [],
      isOpen: false,
      image: ''
    }
  }
  componentWillMount () {
    NewsModel.find()
      .then(res => {
        this.setState({news: res.data})
      })
  }
  truncateText = (selector, maxLength) =>{
    if (selector.length > maxLength) {
      selector = selector.substr(0,maxLength) + '...';
    }
    return selector;
  }
  requestDeleteProject = (id) => {
    confirmAlert(
      'Thông báo',
      'Bạn muốn xóa tin tức này ?',
      'Yes',
      'No',
      () => {
        NewsModel.deleteById(id).then(
          NewsModel.find()
            .then(res => {
              this.setState({news: res.data})
            })
        )
      })
  }

  render () {
    const { news } = this.state;
    const button =[{
      name: 'Tạo mới tin tức',
      value: '/app/news/news-add'
    }]
    return (
      <div className='container-fluid'>
        <PageTitle
          title='Danh sách tin tức'
          button ={
            button
          }
        />
        <div className="row el-element-overlay box-news-list">
          {
            news.map( item => (
              <div key={item.id} className="col-lg-3 col-md-6 news-item">
                <div className="card">
                  <div className="el-card-item">
                    <div className="el-card-avatar el-overlay-1">
                      <LazyLoad debounce={false} offsetTop={1000} >
                        <div style={{ overflow:'hidden', height: '150px' }}>
                          <img className='card-img-top img-responsive'style={{minHeight: '150px'}} src={item.image} alt='Card image cap' />
                        </div>
                      </LazyLoad>
                      <div className="el-overlay">
                        <ul className="el-info">
                          <li>
                            <a
                              className="btn default btn-outline image-popup-vertical-fit"
                              href="javascript:void(0);"
                              onClick={() => {
                                  browserHistory.push(
                                    {
                                      pathname :`/app/news/news-detail/${item.id}`,
                                      state :{ item}
                                    }
                                  )
                              }}
                            >
                              <i className=" icon-eye"/>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:void(0)"
                              onClick={()=>{
                                browserHistory.push({
                                  pathname: `/app/news/news-edit/${item.id}`,
                                  state:{item}
                                })
                              }}
                              className="btn default btn-outline">
                              <i className="icon-pencil"/>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:void(0)"
                              onClick={()=>{
                                this.requestDeleteProject(item.id)
                              }}
                              className="btn default btn-outline">
                              <i className="icon-close"/>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="el-card-content">
                      <h5 className="box-title">{this.truncateText(item.title, 30)}</h5>
                      <br />
                      <p><small>{this.truncateText(item.desc, 80)}</small></p>
                      <br />
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
export default NewsListView
