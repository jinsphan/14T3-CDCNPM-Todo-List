import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './LoginView.scss'
import Splash from '../../Guest/Splash/components/SplashView'

const NODE_ENV = process.env.NODE_ENV || 'development';

class LoginView extends Component {
  constructor () {
    super();
    this.state = {
      email: NODE_ENV === 'development' ? 'admin@admin.com' : '',
      password: NODE_ENV === 'development' ? 'admin' : '',
      checkbox: false
    }
  }
  login = (event) => {
    // event.preventDefault()
    const email = this.state.email;
    const password = this.state.password;
    const checkbox = this.state.checkbox;
    this.props.login(email, password, checkbox)
  };

  render () {
    return (
      <div>
       
      <section id='wrapper' className='login-register login-sidebar' style={{ backgroundImage: `url(${require('../../../styles/images/background/car.jpg')})` }}>
      
      <Splash>
      <div className='login-box card'>
      
      <div className='card-body'>
     
        <form className='form-horizontal form-material' id='loginform' onSubmit={(e) => this.login(e)}>
          <a href='javascript:void(0)' className='text-center db text-left'><img src={require('../../../styles/images/logo.png')} style={{ width:'200px', position:'absolute', marginTop:'-50px', marginLeft:'-50px' }} alt='Home' />
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
}
export default LoginView
