import React, { Component } from 'react'
import './Notifications.scss'
import PropTypes from 'prop-types'
export default class Notifications extends Component {
  constructor (props) {
    super(props)
    this.state = {
      listMessages : [],
      index: 1
    }
  }
  componentWillReceiveProps (nextProps) {
    // const item = {
    //   style : nextProps.style,
    //   title : nextProps.title,
    //   message: nextProps.message,
    //   index: this.state.index,
    // }
    //
    // const list = this.state.listMessages
    // list.push(item)
    // this.setState({
    //   isShow: nextProps.isShow,
    //   listMessages: list,
    //   index: this.state.index + 1
    // })
  }
  onRemoveItem = () => {
    this.props.hide()
  }
  render () {
    const { isShow, style, title, message } = this.props
    const styles = {
      info : 'jq-icon-info',
      success : 'jq-icon-success',
      error : 'jq-icon-error',
      warning:'jq-icon-warning'
    }
    return (
      <div className='jq-toast-wrap top-right'>
        <div
          className={`${'jq-toast-single jq-has-icon'} ${styles[style] ? style[style] : 'jq-icon-info'}`}
          style={{ textAlign: 'left', display: isShow ? 'block' : 'none' }}
        >
          <span
            className='jq-toast-loader jq-toast-loaded'
            style={{
              WebkitTransition: 'width 2.6s ease-in',
              OTransition: 'width 2.6s ease-in',
              transition: 'width 2.6s ease-in',
              backgroundColor: '#ff6849'
            }}
            onAnimationEnd={() => {
              this.onRemoveItem()
            }}
          />
          <span
            className='close-jq-toast-single'
            onClick={() => {
              this.onRemoveItem()
            }}
          >×</span>
          <h2 className='jq-toast-heading'>{title}</h2>{message}
        </div>

      </div>
    )
  }
}
Notifications.propTypes = {
  style: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  isShow: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
}
