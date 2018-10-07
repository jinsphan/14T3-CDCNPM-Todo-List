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
import CarsModel from '../../../../../services/api/model/Cars'

// styles
import './CarAddView.scss'

class CarAddView extends Component {
  constructor () {
    super();
    this.state = {
      name: "TOYOTA ALTIS",
      brand: "Altis",
      type: "4 Chỗ",
      color: "Đen, Bạc",
      model: "2013 – 2016",
      duration: "tháng",
      price: 24000000,
      image: "",
      file : null,
      imagePreview : '',
      guildContent: '',
      formRent:'hop-dong'
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
  getGuideContent = (content) =>{
    this.setState({
      guildContent : content
    })
  }
  addCar = async() => {
    const { file, name, brand, type, color, model, price, guildContent, duration ,formRent} = this.state;

    this.setState({ isLoading: true });
    await uploadFile(file)
      .then(res => {
        CarsModel.create({
          name, brand, type, color, model, price,duration, image: res, guildContent, formRent
        }).then( result => {
          this.setState({ isLoading: false });
          browserHistory.push('/app/cars')
        }).catch(e => { this.setState({ isLoading: false }) })

      });
  }
  render () {
    const { file, imagePreview } = this.state;
    return (
      <div className='container-fluid'>
        <PageTitle
          title='Tạo mới xe'
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
                        <label htmlFor='name'>Tên xe</label>
                        <input
                          type='text'
                          value={this.state.name}
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
                          <option value="46 chỗ">45 chỗ</option>
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
                                    disabled={this.state.formRent === "tu-lai"}
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
                        <FormEditor getContent={this.getGuideContent}/>
                      </div>
                    </div>
                  </div>
                  <button
                    type='button'
                    onClick={this.addCar}
                    disabled={this.state.isLoading}
                    className='btn btn-success waves-effect waves-light m-r-10'>
                    Thêm xe
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
export default connect()(CarAddView)
