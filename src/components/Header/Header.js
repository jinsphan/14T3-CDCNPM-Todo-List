import React,{Component} from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import { browserHistory } from 'react-router'

const toggleSidebar = () => {
  document.body.classList.toggle('mini-sidebar')
}
class Header extends Component{
  render(){
    const { dropdownName, updateDropdown, settings = 'Fresh Food',logout } = this.props
      return (
          <header className='topbar'>
            <nav className='navbar top-navbar navbar-expand-md navbar-dark'>
              <div className='navbar-header'>
                <Link className='navbar-brand' to='/'>
                  <b>
                    <img src={require('../../styles/images/logo/logo_transparent.png')} alt='homepage' className='dark-logo' style={{width : '60px'}} />
                    <img src={require('../../styles/images/logo/logo_transparent.png')} alt='homepage' className='light-logo'style={{width : '60px'}} />
                  </b>
                  <span className='hidden-xs mini-logo'>{settings.appName}</span>
                </Link>
              </div>
              <div className='navbar-collapse'>
                <ul className='navbar-nav mr-auto'>
                  <li className='nav-item'>
                    <Link className='nav-link nav-toggler d-block d-sm-none waves-effect waves-dark' onClick={() => toggleSidebar()}>
                      <i className='ti-menu' />
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link sidebartoggler d-none d-lg-block d-md-block waves-effect waves-dark' onClick={() => toggleSidebar()}>
                      <i className='icon-menu' />
                    </Link>
                  </li>
                </ul>
                <ul className='navbar-nav my-lg-0'>
                  <li className={`nav-item dropdown u-pro ${dropdownName === 'profile' && 'show'}`}>
                    <Link onClick={() => updateDropdown('profile')} className='nav-link dropdown-toggle waves-effect waves-dark profile-pic'>
                      <img src={require('../../styles/images/logo/logo.png')} alt='user' className='' />
                      <span className='hidden-md-down' style={{ paddingLeft: '10px' }}>username &nbsp;<i className='fa fa-angle-down' /></span> </Link>
                    <div className={`dropdown-menu dropdown-menu-right animated flipInY ${dropdownName === 'profile' && 'show'}`}>

                      <Link to='/app/profile' onClick={() => updateDropdown('')}  className='dropdown-item'><i className='ti-user' /> My Profile</Link>

                      <div className='dropdown-divider' />

                      <Link onClick={() => logout()} className='dropdown-item'><i className='fa fa-power-off' /> Logout</Link>

                    </div>
                  </li>
                  <li className='nav-item right-side-toggle'> <Link to='/app/settings' className='nav-link  waves-effect waves-light' ><i className='ti-settings' /></Link></li>
                </ul>
              </div>
            </nav>
          </header>
      )
  }
}

Header.propTypes = {
  updateDropdown: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
  dropdownName: PropTypes.string.isRequired,
  userInfo: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
}
export default Header