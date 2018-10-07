import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import {connect} from "react-redux";
import { browserHistory } from 'react-router'
// components
import PageTitle from '../../../../../components/Elements/PageTitle'
import Alert from '../../../../../components/Alert/index'
import FormEditor from '../../../../../components/FormEditor/FormEditor'
// services
import uploadFile from '../../../../../services/uploadFile'
import ServicesModel from '../../../../../services/api/model/Services'

// styles
import './ServicesEditView.scss'

class ServicesEditView extends Component {
  constructor () {
    super();
    this.state = {
      name: "",
      type: "",
      id: 0,
      content :''
    }
  }
  componentWillMount(){
    const id = this.props.params.id;
    ServicesModel.findById(id).then(res => {
      this.setState({
        name: res.data.name,
        type: res.data.type,
        id: res.data.id,
        content : res.data.content
      })})
  }
  getContent = (content) =>{
    this.setState({
      content : content
    })
  }

  updateCar = async() => {
    const { name, type, id, content } = this.state;
    this.setState({ isLoading: true });
    ServicesModel.update({
      name, type, id, content
    }).then( result => {
      this.setState({ isLoading: false });
      browserHistory.push('/app/services')
    }).catch(e => { this.setState({ isLoading: false }) })

  }
  render () {
    const { file, imagePreview, image, name } = this.state;

    return (
      <div className='container-fluid'>
        <PageTitle
          title={name}
          button={[]}
        />
        <div className='row'>
          <div className='col-md-12'>
            <div className='card'>
              <div className='card-body'>
                <form className='pro-add-form'>
                  <div className='row'>
                    {
                      this.state.id ? <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <label htmlFor="">Giới thiệu chi tiết về dịch vụ</label>
                          <FormEditor getContent={this.getContent} defaultContent={this.state.content}/>
                        </div>
                      </div> :null
                    }

                  </div>

                  <div className="text-center">
                    <button
                      type='button'
                      onClick={this.updateCar}
                      disabled={this.state.isLoading}
                      className='btn btn-success w-25 waves-effect waves-light m-r-10'>
                      {'Cật nhập'}
                      {this.state.isLoading && <i className='fa fa-spinner fa-spin' style={{ paddingLeft: 5 }} />}
                    </button>
                    <button type='button' className='btn btn-dark w-25 waves-effect waves-light' onClick={() => {this.setState({ imagesPreviewUrl: [] }); browserHistory.replace('/app/services')}}>{'Hủy'}</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
export default connect()(ServicesEditView)
