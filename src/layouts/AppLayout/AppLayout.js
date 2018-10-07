import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateDropdown } from '../../store/site'
import { checkLogin } from '../../routes/Login/modules/login'
import PropTypes from 'prop-types'
import Sidebar from '../../components/Sidebar/Sidebar'
import Header from '../../components/Header/Header'
import Toasts from '../../components/Toast/Toasts'
import './PageLayout.scss'

class AppLayout extends Component {
  constructor () {
    super()
    this.setWrapperRef = this.setWrapperRef.bind(this)
    this.resetDropdown = this.resetDropdown.bind(this)
  }
  componentWillMount () {
    this.props.checkLogin()
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
  render () {
    const { children, updateDropdown, dropdownName, isLogin, userInfo, settings } = this.props
    if (isLogin) {
      return <div id='main-wrapper' className="app-layout">
        <div
          ref={this.setWrapperRef}
          className='bg-outside'
          style={{ display: dropdownName === '' ? 'none' : 'block' }}
        />
        <Header
          updateDropdown={updateDropdown}
          dropdownName={dropdownName}
          userInfo={userInfo}
          settings={settings}
        />
        <Sidebar userInfo={userInfo} />
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
  checkLogin: PropTypes.func.isRequired,
  dropdownName: PropTypes.string.isRequired,
  userInfo: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  dropdownName: state.site.dropdownName,
  userInfo: state.auth.userInfo,
  isLogin: state.auth.isLogin,
  settings : state.site.settings
})
const mapDispatchToProps = {
  updateDropdown,
  checkLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout)
