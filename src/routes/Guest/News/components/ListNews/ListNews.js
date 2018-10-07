import React, { Component ,Fragment} from 'react'
import PropTypes from 'prop-types'
import {browserHistory} from 'react-router'
import {changeToSlug} from '../../../../../services/changeToSlug'
import NewsModel from '../../../../../services/api/model/News'

import './ListNews.scss'
class ListNews extends Component {
  constructor(){
    super();
    this.state = {
      data: []
    }
  }
  componentDidMount(){
    const { params } = this.props;
    this.getNews(params)
  }
  getNews = (param) => {
    switch (param){
      case 'du-lich-mien-trung' : return NewsModel.findByTravel()
        .then(res => { this.setState({data: res.data})});
      case 'thong-tin-thue-xe' : return NewsModel.findByCar()
        .then(res => { this.setState({data :res.data})});
      case 'tin-tuc-va-su-kien' : return NewsModel.findByCompany()
        .then(res => { this.setState({data: res.data})})
    }
  }
  getTitle = (title) => {
    switch (title){
      case 'du-lich-mien-trung' : return ( <Helmet>
        <title>{title}-Thuê xe TTB </title>
        </Helmet>)
      case 'thong-tin-thue-xe' : return ( <Helmet>
        <title>{title}-Thuê xe TTB </title>
        </Helmet>)
      case 'tin-tuc-va-su-kien' : return ( <Helmet>
        <title>{title}-Thuê xe TTB </title>
        </Helmet>)
    }
  }
  componentWillReceiveProps(nextProps){
    this.getNews(nextProps.params)
  }
  truncateText = (selector, maxLength) =>{
    if (selector.length > maxLength) {
      selector = selector.substr(0,maxLength) + '...';
    }
    return selector;
  }
  render () {
    const {data} = this.state;
    return (
      <div className="list-news" >
      {
        data.length > 0 && data.map((news)=>{
          return(
            <div key={news.id}>
              <div className="row list-news__item" onClick={()=> {
                const params = `/tin-tuc/${news.type}/${news.id}`;
                browserHistory.push({
                  pathname: params,
                  state: {news}
                } )
              }}>
                <div className="col-lg-3"><img src={news.image} alt="" className="img-responsive"/></div>
                <div className="col-lg-9">
                  <h4><strong>{news.title}</strong></h4>
                  <p>{this.truncateText(news.desc,180)}</p>
                </div>
              </div>
              </div>
          )
        })
      }
    </div>
    )
  }
}
export default ListNews
