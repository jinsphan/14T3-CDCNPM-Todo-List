import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './Toast.scss'
class Toast extends Component {
  render () {
    return (
      <div className='jq-toast-wrap top-right'>
        <div
          className={`jq-toast-single jq-has-icon ${this.props.style ? this.props.style : 'info'}`}
        >
          <span
            className='jq-toast-loader jq-toast-loaded'
            style={{
              WebkitTransition: 'width 2.6s ease-in',
              OTransition: 'width 2.6s ease-in',
              transition: 'width 2.6s ease-in',
              backgroundColor: '#ff6849'
            }}
            onAnimationEnd={this.props.onDismissClick}
          />
          <span
            className='close-jq-toast-single'
            onClick={this.props.onDismissClick}
          >×</span>
          <h2 className='jq-toast-heading'>{this.props.title}</h2>{this.props.message}
        </div>

      </div>
    )
  }

  shouldComponentUpdate () {
    return false
  }
}

Toast.propTypes = {
  onDismissClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired
}

export default Toast
