import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './LoginView.scss'
import Splash from '../../Guest/Splash/components/SplashView'
import {browserHistory} from 'react-router'
class LoginView extends Component {
  constructor () {
    super();
    this.state = {
      email:'truongtv10',
      password: '12345',
      checkbox: false
    }
  }
  login = (event) => {
    this.props.login(this.state.email,this.state.password)
  };
  componentWillMount () {
      console.log(this.props.isLogin)

      if(this.props.isLogin){
          console.log(this.props.isLogin)
          browserHistory.push('/app')
      } else {
          console.log('else',this.props.isLogin)
          this.props.refreshToken()
      }
  }
  render () {
    return (
      <div>
       
      <section id='wrapper' className='login-register login-sidebar' style={{ backgroundImage: `url(${require('../../../styles/images/background/car.jpg')})` }}>
      
      <Splash>
      <div className='login-box card'>
      
      <div className='card-body'>
     
        <form className='form-horizontal form-material' id='loginform' onSubmit={(e) => this.login(e)}>
          <a href='javascript:void(0)' className='text-center' style={{margin : '0 50px'}}>
          <img src={"http://cdn.onlinewebfonts.com/svg/img_464401.png"} style={{ width:'200px'}} alt='Home' />
            <br />
            </a>
          <div className='form-group m-t-40'>
            <div className='col-xs-12'>
              <input className='form-control' value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} type='text' required='' placeholder='Email' />
            </div>
          </div>
          <div className='form-group'>
            <div className='col-xs-12'>
              <input className='form-control' value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} type='password' required='' placeholder='Password' />
            </div>
          </div>
          <div className='form-group row'>
            <div className='col-md-12'>
              <div className='custom-control custom-checkbox'>
                <input type='checkbox' className='custom-control-input' checked={this.state.checkbox} onChange={(e) => this.setState({checkbox: !this.state.checkbox})} id='customCheck1' />
                <label  className='custom-control-label' htmlFor='customCheck1' style={{ color:'white' }}>Remember me</label>
              </div>
            </div>
          </div>
          <div className='form-group text-center m-t-20'>
            <div className='col-xs-12'>
              <button className='btn btn-info btn-lg btn-block text-uppercase btn-rounded' onClick={() => this.login()} type='button'>Log In</button>
            </div>
          </div>
        </form>
      </div>
    </div>
      </Splash>
        
      </section>
      </div>
    )
  }
}

LoginView.propTypes = {
  login: PropTypes.func.isRequired,
    refreshToken: PropTypes.func.isRequired,
}
export default LoginView
