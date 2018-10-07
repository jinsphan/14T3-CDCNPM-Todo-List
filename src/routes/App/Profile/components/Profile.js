import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {browserHistory} from "react-router";
import {connect} from "react-redux";
import Validator from 'validatorjs'

// components
import PageTitle from '../../../../components/Elements/PageTitle'
// services
import {addToast} from "../../../../store/toasts";
import { getUserInfoSuccess, checkLogin } from '../../../../routes/Login/modules/login'
import uploadFile from "../../../../services/uploadFile";
import UserModel from "../../../../services/api/model/User";
// styles
import './Profile.scss'

class Profile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: false,
      avatarUrl: props.userInfo.avatarUrl,
      email: props.userInfo.email,
      phone: props.userInfo.phone,
      username: props.userInfo.username,
      password: '',
      confirmPassword: '',
      file : null,
      errors: {},
      avatarReview: props.userInfo.avatarUrl ? props.userInfo.avatarUrl : require('../../../../styles/images/users/1.jpg'),
    }
  }
  static propTypes = {
    userInfo: PropTypes.object.isRequired,
  };
  handleChange = (value, key) => {
    this.setState({[key]: value})
  };
  handleUpdateProfile = async() => {
    const { email, phone, username, file} = this.state;
    const data = this.props.userInfo;
    this.setState({ isLoading: true });
    if (file !== null) {
      await uploadFile(file)
        .then(res => {
          UserModel.update({
            ...data, email, phone, username, avatarUrl: res
          }).then( result => {
            this.setState({ isLoading: false });
            this.props.dispatch(getUserInfoSuccess(result.data))
            this.props.dispatch(addToast({ style: 'success', title: 'Thành công', message: 'Cập nhật thông tin cá nhân thành công' }))
          }).catch(e => {
            this.setState({ isLoading: false })
          })
        });
    } else {
      UserModel.update({
        ...data, email, phone, username
      }).then( result => {
        this.setState({ isLoading: false });
        this.props.dispatch(getUserInfoSuccess(result.data))
        this.props.dispatch(addToast({ style: 'success', title: 'Thành công', message: 'Cập nhật thông tin cá nhân thành công' }))
      }).catch(e => {
        this.setState({ isLoading: false })
      })
    }
  }
  changePassword = () => {
    const data = this.props.userInfo;
    const { password, confirmPassword } = this.state;
    let dataPass = {
      password,
      confirmPassword
    };
    this.setState({ isLoading: true });
    let rules = {
      password: 'required|min:6',
      confirmPassword: 'required|min:6|same:password'
    };

    let validation = new Validator(dataPass, rules);
    if(validation.passes()){
      this.setState({errors: {}})
      UserModel.update({
        ...data, password
      }).then( result => {
        this.setState({ isLoading: false });
        this.props.dispatch(addToast({ style: 'success', title: 'Thành công', message: 'Đổi mật khẩu thành công' }))
        this.props.dispatch(checkLogin())

      }).catch(e => {
        this.setState({ isLoading: false })
      })
    }else {
      this.setState({errors: validation.errors.errors, isLoading: false})
    }
  }
  onChangeAvatar = (e) => {
    e.preventDefault()
    const file = e.target.files[0]
    const reader = new FileReader()
    const blob = file.slice(0, -1, 'image/jpg');
    const newName = `${this.state.username}-${Date.parse(new Date())}.jpg`
    const newFile = new File([blob], newName, {type: 'image/jpg'});
    reader.onload = (e) => {
      this.setState({
        avatarReview:e.target.result,
        file: newFile
      })
    }
    reader.readAsDataURL(newFile)
  }
  render () {
    const { email, phone, username, avatarReview, isLoading,  password, confirmPassword, errors } = this.state
    return (
      <div className='container-fluid'>
        <PageTitle
          title='Profile'
          button={[]}
        />
        <div className='row'>
          <div className='col-lg-4 col-xlg-3 col-md-5'>
            <div className='card'>
              <div className='card-body'>
                <center className='m-t-30'>
                  <div className='img-circle avatar' style={{ width:'150px', height: '150px', overflow: 'hidden', position:'relative' }} >

                    <input
                      type='file'
                      className='avatar-input'
                      onChange={(e) => { this.onChangeAvatar(e) }}
                    />
                    <div className='mark'>
                      <i className='fa fa-camera icon' />
                    </div>
                    <img src={avatarReview} height={150} />
                  </div>

                  <h4 className='card-title m-t-10'>{username}</h4>
                </center>
              </div>
              <div>
                <hr />
              </div>
              <div className='card-body'> <small className='text-muted'>Email address </small>
                <h6>{email}</h6>
              </div>
            </div>
          </div>
          <div className='col-lg-8 col-xlg-9 col-md-7'>
            <div className='card'>
              <ul className='nav nav-tabs profile-tab' role='tablist'>
                <li className='nav-item'> <a className='nav-link active show' data-toggle='tab' href='#profile' role='tab' aria-selected='false'>Profile</a> </li>
                <li className='nav-item'> <a className='nav-link' data-toggle='tab' href='#settings' role='tab' aria-selected='true'>Change Password</a> </li>
              </ul>
              <div className='tab-content'>
                <div className='tab-pane active show' id='profile' role='tabpanel'>
                  <div className='card-body'>
                    <form className='form-horizontal form-material'>
                      <div className='form-group'>
                        <label className='col-md-12'>Full Name</label>
                        <div className='col-md-12'>
                          <input
                            type='text'
                            value={username}
                            className='form-control form-control-line'
                            name='username'
                            onChange={(e) => { this.handleChange(e.target.value, 'username') }}
                          />
                        </div>
                      </div>
                      <div className='form-group'>
                        <label htmlFor='example-email' className='col-md-12'>Email</label>
                        <div className='col-md-12'>
                          <input
                            type='email'
                            value={email}
                            placeholder=''
                            className='form-control form-control-line'
                            name='email'
                            disabled
                          />
                        </div>
                      </div>

                      <div className='form-group'>
                        <label className='col-md-12'>Phone No</label>
                        <div className='col-md-12'>
                          <input
                            type='text'
                            value={phone}
                            maxLength={11}
                            name='phone'
                            onChange={(e) => { this.handleChange(e.target.value, 'phone') }}
                            className='form-control form-control-line' />
                        </div>
                      </div>

                      <div className='form-group'>
                        <div className='col-sm-12'>
                          <button
                            type='button'
                            onClick={this.handleUpdateProfile}
                            disabled={isLoading}
                            className='btn btn-success waves-effect waves-light m-r-10'>
                            Cập nhật thông tin
                            {isLoading && <i className='fa fa-spinner fa-spin' style={{ paddingLeft: 5 }} />}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div id='settings'>
                  <div className='card-body'>
                    <form className='form-horizontal form-material'>
                      <div className={`form-group ${errors.password && errors.password[0] && 'has-danger'}`}>
                        <label className='col-md-12 form-control-label'>Mật khẩu mới</label>
                        <div className='col-md-12'>
                          <input type='password' value={password} onChange={(e) => { this.handleChange(e.target.value, 'password') }} className={`form-control form-control-line`} />
                          {
                            errors.password && errors.password.map( item => (
                              <div className="form-control-feedback">{item}</div>
                            ))
                          }
                        </div>
                      </div>
                      <div className={`form-group ${errors.confirmPassword && errors.confirmPassword[0] && 'has-danger'}`}>
                        <label className='col-md-12'>Nhập lại mật khẩu mới</label>
                        <div className='col-md-12 form-control-label form-control-label'>
                          <input type='password' value={confirmPassword} onChange={(e) => { this.handleChange(e.target.value, 'confirmPassword') }}  className='form-control form-control-line' />
                          {
                            errors.confirmPassword && errors.confirmPassword.map( item => (
                              <div className="form-control-feedback">{item}</div>
                            ))
                          }
                        </div>
                      </div>
                      <div className='form-group'>
                        <div className='col-sm-12'>
                          <button
                            type='button'
                            onClick={this.changePassword}
                            disabled={isLoading}
                            className='btn btn-success waves-effect waves-light m-r-10'>
                            Đổi mật khẩu
                            {isLoading && <i className='fa fa-spinner fa-spin' style={{ paddingLeft: 5 }} />}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  userInfo : state.auth.userInfo
})


export default connect(mapStateToProps)(Profile)
