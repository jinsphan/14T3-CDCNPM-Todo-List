import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import {connect} from "react-redux";
import { browserHistory } from 'react-router'
// components
import PageTitle from '../../../../../components/Elements/PageTitle'
import FormEditor from '../../../../../components/FormEditor/FormEditor'
import Alert from '../../../../../components/Alert/index'
// services
import uploadFile from '../../../../../services/uploadFile'
import bytesToSize from '../../../../../services/bytesToSize'
import ToursModel from '../../../../../services/api/model/Tours'

// styles
import './ToursAddView.scss'

class ToursAddView extends Component {
  constructor () {
    super();
    this.state = {
      placestart : '',
      destination:'',
      distance : 0,
      charge : 0,
      type: "",
      price: 0,
      description: '',
      image: "",
      file : null,
      imagePreview : '',
    }
  }
  handleImageChange = (e) => {
    e.preventDefault()
    const file = e.target.files[0]
    const reader = new FileReader()
    const blob = file.slice(0, -1, 'image/jpg');
    const newName = `${this.state.name}_${Date.parse(new Date())}.jpg`
    const newFile = new File([blob], newName, {type: 'image/jpg'});
    reader.onload = (e) => {
      this.setState({
        imagePreview:e.target.result,
        file: newFile
      })
    }
    reader.readAsDataURL(newFile)
  }
  getcontent = (content) =>{
    this.setState({
      description :content
    })
  }
  addTours = async() => {
    const { file, placestart, destination, distance, charge,  type,  price, description } = this.state;
    this.setState({ isLoading: true });
    const title = placestart + ' - ' + destination
    await uploadFile(file)
      .then(res => {
        ToursModel.create({
          title , placestart, destination, distance, charge, type,price,image: res, description
        }).then( result => {
          this.setState({ isLoading: false });
          browserHistory.push('/app/tours')
        }).catch(e => { this.setState({ isLoading: false }) })

      });
  }
  render () {
    const { file, imagePreview } = this.state;
    return (
      <div className='container-fluid'>
        <PageTitle
          title='Tạo mới tours'
          button = {[]}
        />
        <div className='row'>
          <div className='col-md-12'>
            <div className='card'>
              <div className='card-body'>
                <form className='pro-add-form'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <label htmlFor='name'>Khởi hành:</label>
                        <input
                          type='text'
                          value={this.state.placestart}
                          onChange={(e) => (this.setState({ placestart: e.target.value }))}
                          className='form-control'
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='name'>Điểm đến:</label>
                        <input
                          type='text'
                          value={this.state.destination}
                          onChange={(e) => (this.setState({ destination: e.target.value }))}
                          className='form-control'
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='name'>Giá thuê</label>
                        <input
                          type='number'
                          value={this.state.price}
                          onChange={(e) => (this.setState({ price: e.target.value }))}
                          className='form-control'
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='name'>Quãng đường:</label>
                        <input
                          type='number'
                          value={this.state.distance}
                          onChange={(e) => (this.setState({ distance: e.target.value }))}
                          className='form-control'
                        />
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <label htmlFor='name'>Phí cầu đường:</label>
                        <input
                          type='number'
                          value={this.state.charge}
                          onChange={(e) => (this.setState({ charge: e.target.value }))}
                          className='form-control'
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='name'>Kiểu tours</label>
                        <select className="custom-select col-12" id="inlineFormCustomSelect" value={this.state.type} onChange={(e) => (this.setState({ type: e.target.value }))}>
                          <option value=""></option>
                          <option value="travel">Du lịch</option>
                          <option value="distance">Theo Tuyến</option>
                        </select>
                      </div>

                      <div className='form-group'>
                        <label htmlFor='input-file-now'>Ảnh đại diện</label>
                        <input type='file' ref='file' onChange={(e) => this.handleImageChange(e)} id='input-file-now' className='dropify form-control' />
                        {
                          imagePreview.length > 0 &&
                          <div className='table-responsive'>
                            <table className='table table-striped'>
                              <tbody>
                              <tr className=''>
                                <td>
                                  <img src={imagePreview} alt='' />
                                </td>
                                <td>
                                  <p className='name'>{file.name}</p>
                                  <strong className='error text-danger' />
                                </td>
                                <td>
                                  <p className='size'>{bytesToSize(file.size)}</p>
                                  <div className='progress progress-striped active' role='progressbar' aria-valuemin='0' aria-valuemax='100' aria-valuenow='0'>
                                    <div className='progress-bar progress-bar-success' />
                                  </div>
                                </td>
                              </tr>
                              </tbody>
                            </table>
                          </div>
                        }
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="">Huớng dẩn chi tiết thuê xe</label>
                        <FormEditor getContent={this.getcontent}/>
                      </div>
                    </div>
                  </div>
                  <button
                    type='button'
                    onClick={this.addTours}
                    disabled={this.state.isLoading}
                    className='btn btn-success waves-effect waves-light m-r-10'>
                    Thêm tour
                    {this.state.isLoading && <i className='fa fa-spinner fa-spin' style={{ paddingLeft: 5 }} />}
                  </button>
                  <button type='button' className='btn btn-dark waves-effect waves-light' onClick={() => this.setState({ imagesPreviewUrl: [] })}>Hủy</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
export default connect()(ToursAddView)
