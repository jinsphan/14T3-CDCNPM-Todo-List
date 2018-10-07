import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from "react-redux";
import { browserHistory } from 'react-router'

// components
import PageTitle from '../../../../../components/Elements/PageTitle'
import FormEditor from '../../../../../components/FormEditor/FormEditor'
import uploadFile from '../../../../../services/uploadFile'
import {changeToSlug} from '../../../../../services/changeToSlug'
// serviers
import NewsModel from '../../../../../services/api/model/News'
// styles
import './NewsAdd.scss'
// actions
import {addToast} from "../../../../../store/toasts";

class NewsAddView extends Component {
  constructor () {
    super()
    this.state = {
      image: "",
      file : null,
      title: '',
      type: 'du-lich',
      desc : '',
      content:'',
      imagePreview : '',
      isLoading: null
    }
  };

  handleImageChange = (e) => {
    e.preventDefault()
    const file = e.target.files[0]
    const reader = new FileReader()
    const blob = file.slice(0, -1, 'image/jpg');
    const newName = `${changeToSlug(this.state.title)}_${Date.parse(new Date())}.jpg`
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
  addNews = async() => {
    const { file, title, type, desc,content } = this.state;
    this.setState({ isLoading: true });
    await uploadFile(file)
      .then(res => {
        NewsModel.create({
          title, type, desc, content, image: res
        }).then( result => {
          browserHistory.push('/app/news')
          this.setState({ isLoading: false });
          this.props.dispatch(addToast({ style: 'success', title: 'Thành công', message: 'Tạo tin tức mới thành công' }))
        }).catch(e => {
          this.setState({ isLoading: false })
          this.props.dispatch(addToast({ style: 'error', title: 'Lỗi', message: e.message }))
        })

      });
  }
  getMainContent=(main) => {
    this.setState({
      content:main
    })
  }
  render () {
    const { file, imagePreview } = this.state;
    const button =[{
      name: 'Tạo mới tin tức',
      value: '/app/news/news-add'
    }]
    return (
      <div className='container-fluid'>
        <PageTitle
          title='Tạo mới tin tức'
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
                        <label htmlFor='name'>Tiêu đề tin tức</label>
                        <input type='text' value={this.state.title} onChange={(e) => (this.setState({ title: e.target.value }))} className='form-control' id='name' />
                      </div>
                      <div className='form-group'>
                        <label className='control-label'>Loại tin tức</label>
                        <select value={this.state.type} className='form-control custom-select' onChange={(e) => this.setState({ type: e.target.value })} id='type'>
                          <option value='du-lich'>Thông tin du lịch miền trung</option>
                          <option value='xe'>Tin tức về xe</option>
                          <option value='ttb'>Tin tức về  TTB</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className='form-group'>
                        <label htmlFor='desc'>Mô tả ngắn</label>
                        <textarea className='form-control' value={this.state.desc} onChange={(e) => (this.setState({ desc: e.target.value }))} rows='4' id='desc' />
                      </div>
                    </div>
                  </div>
                  <h5 className='card-title'>Nội dung tin tức </h5>

                  <div className='form-group'>
                    <div className='row'>
                      <div className='col-md-12'>
                        <FormEditor getContent={this.getMainContent} defaultcontent={this.state.content} />
                      </div>
                    </div>
                  </div>
                  <div className='form-group'>
                    <label htmlFor='input-file-now'>Upload Files</label>
                    <input type='file' ref='file' onChange={(e) => this.handleImageChange(e)} id='input-file-now' className='dropify' />
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
                <div className="text-center">
                  <button type='button' onClick={() => {
                    this.addNews()
                  }} disabled={this.state.isLoading} className='btn btn-success w-25 waves-effect waves-light m-r-10'>
                    Tạo mới
                    {
                      this.state.isLoading && <i className='fa fa-spinner fa-spin' style={{ paddingLeft: 5 }} />
                    }
                  </button>
                  <button type='button' className='btn btn-dark w-25 waves-effect waves-light' onClick={() => this.setState({ imagesPreviewUrl: [] })}>Hủy</button>

                </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>)
  }
}
export default connect()(NewsAddView)
