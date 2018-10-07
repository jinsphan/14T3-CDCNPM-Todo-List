import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import {connect} from "react-redux";
import { browserHistory } from 'react-router'
// components
import PageTitle from '../../../../../components/Elements/PageTitle'
import LoadPages from '../../../../../components/LoadPages/LoadPages'
import Alert from '../../../../../components/Alert/index'
import FormEditor from '../../../../../components/FormEditor/FormEditor'
// services
import uploadFile from '../../../../../services/uploadFile'
import ToursModel from '../../../../../services/api/model/Tours'

// styles
import './ToursEditView.scss'

class ToursEditView extends Component {
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
      id: 0,
      image: "",
      file : null,
      imagePreview : '',
    }
  }
  componentWillMount(){
    const id = this.props.params.id;
    ToursModel.findById(id).then(res => {
      this.setState({
        placestart: res.data.placestart,
        destination: res.data.destination,
        type: res.data.type,
        distance: res.data.distance,
        charge: res.data.charge,
        price: res.data.price,
        description: res.data.description,
        image: res.data.image,
        id: res.data.id,
      })})
  }
  getDescription = (content) =>{
    this.setState({
      description : content
    })
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
  bytesToSize = (bytes) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
    if (bytes === 0) return '0 Byte'
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i]
  }
  updateTours = async() => {
    const { file, placestart, destination, type, distance, charge, price, id ,image, description} = this.state;
    const title = placestart + ' - '+ destination
    this.setState({ isLoading: true });
    if(file){
      await uploadFile(file)
        .then(res => {
          ToursModel.update({
            title, placestart,destination, type, distance, charge, price, image: res, id,description
          }).then( result => {
            this.setState({ isLoading: false });
            browserHistory.push('/app/tours')
          }).catch(e => { this.setState({ isLoading: false }) })

        });
    }
    else {
      ToursModel.update({
        title, placestart,destination, type, distance, charge, price, image, id, description
      }).then( result => {
        this.setState({ isLoading: false });
        browserHistory.push('/app/tours')
      }).catch(e => { this.setState({ isLoading: false }) })
    }

  }
  render () {
    const { file, imagePreview, placestart,destination, type, distance, charge, price, image, id, description} = this.state;
    const button =[{
      name: 'Tạo mới tours',
      value: '/app/tours/tours-add'
    }]
    return (
      <div className='container-fluid'>
        <PageTitle
          title='Thay đổi thông tin tours'
          button={button}
        />
        {
          id ?         <div className='row'>
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
                            value={placestart}
                            onChange={(e) => (this.setState({ placestart: e.target.value }))}
                            className='form-control'
                          />
                        </div>
                        <div className='form-group'>
                          <label htmlFor='name'>Điểm đến:</label>
                          <input
                            type='text'
                            value={destination}
                            onChange={(e) => (this.setState({ destination: e.target.value }))}
                            className='form-control'
                          />
                        </div>
                        <div className='form-group'>
                          <label htmlFor='name'>Giá thuê</label>
                          <input
                            type='number'
                            value={price}
                            onChange={(e) => (this.setState({ price: e.target.value }))}
                            className='form-control'
                          />
                        </div>
                        <div className='form-group'>
                          <label htmlFor='name'>Quãng đường:</label>
                          <input
                            type='number'
                            value={distance}
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
                            value={charge}
                            onChange={(e) => (this.setState({ charge: e.target.value }))}
                            className='form-control'
                          />
                        </div>
                        <div className='form-group'>
                          <label htmlFor='name'>Kiểu tours</label>
                          <select className="custom-select col-12" id="inlineFormCustomSelect" value={type} onChange={(e) => (this.setState({ type: e.target.value }))}>
                            <option value=""></option>
                            <option value="travel">Du lịch</option>
                            <option value="distance">Theo Tuyến</option>
                          </select>
                        </div>
                        <div className='form-group'>
                          <label htmlFor='input-file-now'>Ảnh đại diện</label>
                          <input type='file' ref='file' onChange={(e) => this.handleImageChange(e)} id='input-file-now' className='form-control dropify' />
                          {
                            imagePreview.length === 0 && <img className='img-responsive p-t-20'  src={image} alt=""/>
                          }
                          {
                            imagePreview.length > 0 &&
                            <div className='table-responsive'>
                              <table className='table table-striped'>
                                <tbody>
                                <tr className=''>
                                  <td>
                                    <img className='img-responsive' src={imagePreview.length > 0 ? imagePreview : image} alt='' />
                                  </td>
                                  <td>
                                    <p className='name'>{file.name}</p>
                                    <strong className='error text-danger' />
                                  </td>
                                  <td>
                                    <p className='size'>{this.bytesToSize(file.size)}</p>
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
                      {
                        id ? <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label htmlFor="">Huớng dẩn chi tiết thuê xe</label>
                            <FormEditor getContent={this.getDescription} defaultContent={description}/>
                          </div>
                        </div> :null
                      }

                    </div>

                    <div className="text-center">
                      <button
                        type='button'
                        onClick={this.updateTours}
                        disabled={this.state.isLoading}
                        className='btn btn-success w-25 waves-effect waves-light m-r-10'>
                        {'Cật nhập'}
                        {this.state.isLoading && <i className='fa fa-spinner fa-spin' style={{ paddingLeft: 5 }} />}
                      </button>
                      <button type='button' className='btn btn-dark w-25 waves-effect waves-light'
                              onClick={() => {
                                this.setState({ imagesPreviewUrl: [] }); browserHistory.replace('/app/tours')}}>
                        {'Hủy'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
            : <LoadPages/>
        }
      </div>

    )
  }
}
export default connect()(ToursEditView)
