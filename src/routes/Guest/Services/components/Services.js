import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IntroWhyChooseMe from '../../components/IntroWhyChooseMe/IntroWhyChooseMe'
import './Services.scss'
import LoadPages from '../../../../components/LoadPages/LoadPages'
import Post from '../../../../components/Post/Post'
import ServivesModel from '../../../../services/api/model/Services'
import Helmet from 'react-helmet'
class Services extends Component {
  constructor(props){
    super(props)
    this.state={
      data : {}
    }
  }
  componentDidMount(){
    const {id} = this.props.params
    this.getData(id);
  }
  componentWillReceiveProps(nextProps){
    const {id} = nextProps.params
    this.getData(id);
  }
  getData = (id)=> {
    switch (id){
      case 'lam-visa' :
      {
        ServivesModel.findByVisa().then((res)=>{
          this.setState({
            data : res.data[0]
          })
        })
        break;
      }
      case 'dich-thuat' :
      {
        ServivesModel.findByTranslate().then((res)=>{
          this.setState({
            data : res.data[0]
          })
        })
        break;
      }
      case 've-may-bay' :
      {
        ServivesModel.findByAirTicket().then((res)=>{
          this.setState({
            data : res.data[0]
          })
        })
        break;
      }
    }
  }
  getTitle = (title) => {
    switch (title){
      case 'lam-visa' : return ( <Helmet>
        <title>Làm visa-Thuê xe TTB</title>
        </Helmet>)
      case 'dich-thuat' : return ( <Helmet>
        <title>Dịch thuật-Thuê xe TTB</title>
        </Helmet>)
      case 've-may-bay' : return ( <Helmet>
        <title>Vé máy bay-Thuê xe TTB</title>
        </Helmet>)
    }
  }
  render () {
    const {id} = this.props.params
    const {data} = this.state
    return (
      <div>
        {
          data.id ?
            <div>
              <div className="intro-thuexe">
                <div className="p-t-40 p-b-40">
                  <div className="container m-t-40 m-b-40">
                    <div className="row">
                      <div className="col-lg-2">
                      </div>
                      <div className="col-lg-8">
                        <div className="header-content m-b-40">
                          <div className="text-center text-uppercase">
                            <h1><strong>dịch vụ {data.name}</strong></h1>
                          </div>
                        </div>
                        <div className="header-line">
                          <div className="position-relative header-line__line">
                            <div className="introduce-box-icon icon-line">
                              <i className="fa fa-car"/>
                            </div>
                          </div>
                        </div>
                        <Post content={data.content}/>
                        <div className="text-center">
                          <button className="btn btn-lg form-control"><strong>GỌI NGAY 0987 877 888 (Ms. Hương)</strong></button>
                        </div>
                      </div>
                      <div className="col-lg-2">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <IntroWhyChooseMe/>
            </div> : <LoadPages/>
        }
        {this.getTitle(id)}

      </div>
    )
  }
}
export default Services
