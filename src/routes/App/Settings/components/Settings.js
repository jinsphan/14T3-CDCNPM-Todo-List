import React, { Component } from 'react'
import {connect} from "react-redux";
// components
import PageTitle from '../../../../components/Elements/PageTitle'
import { addToast } from '../../../../store/toasts'
// services
import SettingsModel from '../../../../services/api/model/Settings'
import './Settings.scss'
import {confirmAlert} from "../../../../components/Alert";
import NewsModel from "../../../../services/api/model/News";
import uploadFile from "../../../../services/uploadFile";
import {browserHistory} from "react-router";
import CarsModel from "../../../../services/api/model/Cars";
class Settings extends Component {
  constructor (props) {
    super(props)
    this.state = {
      bannerHome : '',
      file : null,
      data: [],
      oldData: [],
      showActions: ''
    }
    this.settingItemRender = this.settingItemRender.bind(this)
  }
  componentWillMount(){
    SettingsModel.find()
      .then(res => {
        this.setState({ data: res.data, oldData: res.data })
      })
  }
  onChangeText = (value, key) => {
    const { data } = this.state;
    const currentItem = data.filter( item => item.key === key)[0];
    const index = data.indexOf(currentItem)
    data[index].value = value
    currentItem.value = value;
    this.setState({ data})
  };
  submitSettings = (key, blur) =>{
    const { data } = this.state;
    const currentItem = data.filter( item => item.key === key)[0];
    this.setState({showActions: ''})
    confirmAlert('Xác nhận', 'Bạn muốn thay đổi thông tin này không ?', 'Có', 'Không',
      () => {
        SettingsModel.update(currentItem)
          .then(res => {
            this.props.dispatch(addToast({ style: 'success', title: 'Thành công', message: 'Cập nhật cài đặt thành công' }))
          })
      })

  };
  uploadBanner = async(item) => {
    const { file, data } = this.state;
    this.setState({showActions: ''})
    await uploadFile(file)
      .then(res => {
        const currentItem = data.filter( subData => subData.key === item.key)[0];
        currentItem.value = res
        SettingsModel.update(currentItem).then( result => {
          this.props.dispatch(addToast({ style: 'success', title: 'Thành công', message: 'Cập nhật cài đặt thành công' }))
        })
      });
  }
  handleImageChange = (e, item) => {
    e.preventDefault()
    const file = e.target.files[0]
    const reader = new FileReader()
    const blob = file.slice(0, -1, 'image/jpg');
    const newName = `banner-home_${Date.parse(new Date())}.jpg`
    const newFile = new File([blob], newName, {type: 'image/jpg'});
    const { data } = this.state;
    const currentItem = data.filter( subData => subData.key === item.key)[0];
    const index = data.indexOf(currentItem)
    reader.onload = (e) => {
      data[index].value = e.target.result;
      currentItem.value = e.target.result;
      this.setState({
        data,
        file: newFile
      })
    }
    reader.readAsDataURL(newFile)
  }
  getLabelBanner =(key) => {
    switch (key){
      case 'bannerHome': return 'Banner trang chủ';
      case 'bannerNews': return 'Banner tin tức';
      case 'bannerRentCarsRoute': return 'Banner thuê xe theo tuyến';
      case 'bannerRentCars': return 'Banner thuê xe dài hạn';
      case 'bannerRentCarsTravel': return 'Banner thuê xe theo du lịch';
      case 'bannerServices': return 'Banner dịch vụ khách'
    }
  }
  settingItemRender(item){
    const { file, showActions } = this.state;
    switch (item.type){
      case 'image' : return (
        <div key={item.id} className="form-group row">
          <div className="col-lg-6 col-md-6">
            <label htmlFor="input-file-now-custom-1">{this.getLabelBanner(item.key)}</label>
            <div className="dropify-wrapper has-preview">
              {
                item.value.length === 0 &&
                <div className="dropify-message">
                  <span className="file-icon"/> <p>Drag and drop a file
                  here or click</p><p className="dropify-error">Ooops, something wrong appended.</p>
                </div>
              }
              {/*<div className="dropify-loader" style={{display: 'block'}}/>*/}
              <div className="dropify-errors-container">
                <ul/>
              </div>
              <input
                type="file"
                id="input-file-now-custom-1"
                onChange={(e) => this.handleImageChange(e, item)}
                className="dropify"
                onFocus={() => this.setState({showActions: item.key})}
              />
              <button type="button" className="dropify-clear">Remove</button>
              <div className="dropify-preview" style={{display: item.value.length > 0 ? 'block' : 'none'}}>
                            <span className="dropify-render">
                              <img src={item.value}/></span>
                <div className="dropify-infos">
                  <div className="dropify-infos-inner"><p className="dropify-filename"><span
                    className="file-icon"/> <span
                    className="dropify-filename-inner">{file ? file.name : ''}</span></p><p
                    className="dropify-infos-message">Drag and drop or click to replace</p></div>
                </div>
              </div>
            </div>

          </div>
          <div className="col-md-6">
            {
              showActions === item.key &&
              <div className="col-4 button-group">
                <button type="button" onClick={(e) => this.uploadBanner(item)} className="btn btn-info btn-circle"><i className="fa fa-check"/></button>
                <button type="button" onClick={() => this.setState({showActions: ''})} className="btn btn-warning btn-circle"><i className="fa fa-times"/></button>
              </div>
            }
          </div>
        </div>
      )
      case 'string': return (
        <div key={item.id} className="form-group row">
          <label htmlFor={item.key} className="col-2 col-form-label">{item.key.toUpperCase()}</label>
          <div className="col-6">
            <input
              className="form-control"
              type={item.key === 'email' ? 'email': 'text'}
              value={item.value}
              id={item.key}
              onChange={(e) => this.onChangeText(e.target.value, item.key)}
              onFocus={() => this.setState({showActions: item.key})}
              // onBlur={(e) => this.submitSettings(item.key)}
            />
          </div>
          {
            showActions === item.key &&
            <div className="col-4 button-group">
              <button type="button" onClick={(e) => this.submitSettings(item)} className="btn btn-info btn-circle"><i className="fa fa-check"/></button>
              <button type="button" onClick={() => this.setState({showActions: ''})} className="btn btn-warning btn-circle"><i className="fa fa-times"/></button>
            </div>
          }

        </div>
      )
    }
  }
  render () {
    const { data } = this.state;
    return (
        <div className="container-fluid settings-box">
          <PageTitle
            title='Cài đặt'
            button={[]}
          />
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Cài đặt chi tiết</h4>
                  <h6 className="card-subtitle"> Thông tin website </h6>
                  <form className="form">
                    {
                      data.map( item => (
                        this.settingItemRender(item)
                      ))
                    }
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
export default connect()(Settings)
