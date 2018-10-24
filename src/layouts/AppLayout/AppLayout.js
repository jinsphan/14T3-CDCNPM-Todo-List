import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateDropdown } from '../../store/site'
import { refreshToken,logout } from '../../store/moduleAuthen/AuthAction'
import PropTypes from 'prop-types'
import Sidebar from '../../components/Sidebar/Sidebar'
import Header from '../../components/Header/Header'
import Toasts from '../../components/Toast/Toasts'
import {browserHistory} from 'react-router'
import {CacheService} from '../../services/CacheService'
import {setAccessToken} from '../../services/api/_apiFactoryWithHeader'
import './PageLayout.scss'

class AppLayout extends Component {
  constructor () {
    super()
    this.setWrapperRef = this.setWrapperRef.bind(this)
    this.resetDropdown = this.resetDropdown.bind(this)
      // if (CacheService.getAuthData()) {
      //     setAccessToken(CacheService.getAuthData().Token);
      // }

  }
  componentWillMount () {

  }
  componentDidMount () {
    document.addEventListener('click', this.resetDropdown)

  }

  componentWillUnmount () {
    document.removeEventListener('click', this.resetDropdown)
  }

  resetDropdown (event) {
    if (this.wrapperRef && this.wrapperRef.contains(event.target)) {
      this.props.updateDropdown('')
    }
  }
  setWrapperRef (node) {
    this.wrapperRef = node
  }
  logout = () => {
    this.props.logout()
      // browserHistory.push('/login')
  }
  render () {
      // console.log('app',this.props.isLogin)
      if(false) {
          console.log('app',this.props.isLogin)
          this.props.refreshToken()
      }
      const { children, updateDropdown, dropdownName, isLogin, userInfo, settings } = this.props
    if (true) {
      return <div id='main-wrapper' className="app-layout">
        <div
          ref={this.setWrapperRef}
          className='bg-outside'
          style={{ display: dropdownName === '' ? 'none' : 'block' }}
        />
        <Header
          updateDropdown={updateDropdown}
          dropdownName={dropdownName}
          logout={this.logout}
        />
        <Sidebar/>
        <div className='page-wrapper '>
          {children}
        </div>
        <Toasts />

      </div>
    } else {
      return null
    }
  }
}
AppLayout.propTypes = {
  children: PropTypes.node,
  updateDropdown: PropTypes.func.isRequired,
  dropdownName: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  dropdownName: state.site.dropdownName,
    isLogin : state.authen.auth,
})
const mapDispatchToProps = {
  updateDropdown,
    refreshToken,
    logout
}

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout)
