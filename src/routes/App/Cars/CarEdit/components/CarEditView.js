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
import CarsModel from '../../../../../services/api/model/Cars'

// styles
import './CarEditView.scss'

class CarEditView extends Component {
  constructor () {
    super();
    this.state = {
      name: "",
      brand: "",
      type: "",
      color: "",
      model: "",
      duration: "",
      price: 0,
      id: 0,
      image: "",
      file : null,
      imagePreview : '',
      guildContent :'',
      formRent:''

    }
  }
  componentWillMount(){
    const id = this.props.params.id;
    CarsModel.findById(id).then(res => {
      this.setState({
        name: res.data.name,
        brand: res.data.brand,
        type: res.data.type,
        color: res.data.color,
        model: res.data.model,
        price: res.data.price,
        duration: res.data.duration,
        image: res.data.image,
        id: res.data.id,
        guildContent : res.data.guildContent,
        formRent: res.data.formRent || 'hop-dong'
      })})
  }
  getGuideContent = (content) =>{
    this.setState({
      guildContent : content
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
  updateCar = async() => {
    const { file, name, brand, type, color, model, duration, price, id ,image, guildContent, formRent} = this.state;
    this.setState({ isLoading: true });

    if(file){
      await uploadFile(file)
        .then(res => {
          CarsModel.update({
            name, brand, type, color, model, price, duration, image: res, id, guildContent, formRent
          }).then( result => {
            this.setState({ isLoading: false });
            browserHistory.push('/app/cars')
          }).catch(e => { this.setState({ isLoading: false }) })

        });
    }
    else {
      CarsModel.update({
        name, brand, type, color, model, price, image, id, duration, guildContent, formRent
      }).then( result => {
        this.setState({ isLoading: false });
        browserHistory.goBack()
      }).catch(e => { this.setState({ isLoading: false }) })
    }

  }
  render () {
    const { file, imagePreview, image, name } = this.state;
    const button =[{
      name: 'Tạo mới xe',
      value: '/app/cars/car-add'
    }]
    return (
      <div className='container-fluid'>
        <PageTitle
          title='Thay đổi thông tin xe'
          button={button}
        />
        <div className='row'>
          <div className='col-md-12'>
            <div className='card'>
              <div className='card-body'>
                <form className='pro-add-form'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <label htmlFor='name'>Tên xe</label>
                        <input
                          type='text'
                          value={name}
                          onChange={(e) => (this.setState({ name: e.target.value }))}
                          className='form-control'
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='name'>Hiệu</label>
                        <input
                          type='text'
                          value={this.state.brand}
                          onChange={(e) => (this.setState({ brand: e.target.value }))}
                          className='form-control'
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='name'>Đời</label>
                        <input
                          type='text'
                          value={this.state.model}
                          onChange={(e) => (this.setState({ model: e.target.value }))}
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
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <label htmlFor='name'>Kiểu xe</label>
                        <select className="custom-select col-12" id="inlineFormCustomSelect" value={this.state.type} onChange={(e) => (this.setState({ type: e.target.value }))}>
                          <option value="4 chỗ">4 chỗ</option>
                          <option value="7 chỗ">7 chỗ</option>
                          <option value="16 chỗ">16 chỗ</option>
                          <option value="29 chỗ">29 chỗ</option>
                          <option value="34 chỗ">34 chỗ</option>
                          <option value="46 chỗ">46 chỗ</option>
                        </select>
                      </div>
                      <div className='form-group'>
                        <label htmlFor='name'>Màu xe</label>
                        <input
                          type='text'
                          value={this.state.color}
                          onChange={(e) => (this.setState({ color: e.target.value }))}
                          className='form-control'
                        />
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className='form-group'>
                            <label htmlFor='duration'>Hình thức cho thuê</label>
                            <select className="custom-select col-12" id="formRent" value={this.state.formRent} onChange={(e) => {
                              if(e.target.value === 'hop-dong'){
                                this.setState({ formRent: e.target.value })
                              } else {
                                this.setState({ formRent: e.target.value, duration : "ngày" })
                              }
                            }}>
                              <option value="hop-dong">Xe hợp đồng</option>
                              <option value="tu-lai">Xe tự lái</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className='form-group'>
                            <label htmlFor='duration'>Thời lượng</label>
                            <select className="custom-select col-12"
                                    id="duration" value={this.state.duration}
                                    onChange={(e) => (this.setState({ duration: e.target.value }))}
                                    disabled={ this.state.formRent === "tu-lai"}
                            >
                              <option value="tháng">Tháng</option>
                              <option value="quý">Quý</option>
                              <option value="nam">Năm</option>
                              <option value="ngày">Ngày</option>
                            </select>
                          </div>
                        </div>
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
                      this.state.id && <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <label htmlFor="">Huớng dẩn chi tiết thuê xe</label>
                          <FormEditor getContent={this.getGuideContent} defaultContent={this.state.guildContent}/>
                        </div>
                      </div>
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
                    <button type='button' className='btn btn-dark w-25 waves-effect waves-light' onClick={() => {this.setState({ imagesPreviewUrl: [] }); browserHistory.replace('/app/cars')}}>{'Hủy'}</button>
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
export default connect()(CarEditView)
