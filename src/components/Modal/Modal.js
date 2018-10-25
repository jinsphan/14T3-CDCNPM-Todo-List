import React, { Component } from 'react'
import './Modal.scss'
export default class Modal extends Component {
  constructor () {
    super()
    this.state = {
      isOpen : null,
      onRequestClose : () => {},
      title: '',
      content:'',
      close: null,
      onRequestSuccess : () => {},
      success: null,
      subtitle: null,
      isForm: null,
      textSuccess: 'Success',
      textClose:'Close',
      style: ''
    }
  }
  componentWillReceiveProps (nextProps) {
    this.setState({
      isOpen: nextProps.isOpen,
      onRequestClose: nextProps.onRequestClose,
      title: nextProps.title,
      content:nextProps.content,
      close: nextProps.close,
      onRequestSuccess : nextProps.onRequestSuccess,
      success: nextProps.success,
      subtitle:nextProps.subtitle,
      isForm: nextProps.isForm,
      textSuccess: nextProps.textSuccess ? nextProps.textSuccess : 'Success',
      textClose: nextProps.textClose ? nextProps.textClose : 'Close',
      style: nextProps.style ? nextProps.style : '',
    })
  }
  onClose = () => {
    this.state.onRequestClose()
    this.setState({
      isOpen: false,
    })
  }
  onSuccess = () => {
    this.state.onRequestSuccess()
    this.setState({
      isOpen: false,
    })
  }
  render () {
    return (
      <div >

        <div className='modal'
          style={{ display : this.state.isOpen ? 'block' : 'none' }}
        >
          <div
            className='overlay animated fadeIn'
            style={{ display : this.state.isOpen ? 'block' : 'none' }}
            onClick={this.onClose}
            aria-hidden='true'
           />
          <div className={`${'modal-dialog'} ${this.state.style === 'large' ? 'modal-lg' : ''}`}>
            <div
              className={`${'modal-content'} ${'animated'} ${this.state.isOpen ? 'bounceInDown' : ''}`}
              style={{ display : this.state.isOpen ? 'block' : 'none' }}
            >
              <div className='modal-header'>
                <h4 className='modal-title' id='myModalLabel'>{this.state.title}</h4>
                <button
                  type='button'
                  className='close'
                  data-dismiss='modal'
                  aria-hidden='true'
                  onClick={
                    this.onClose
                  }
                >×</button>
              </div>
              <div className='modal-body'>
                <h4>{this.state.subtitle}</h4>
                <p>{this.state.content}</p>
                {
                  this.state.isForm
                    ? <form>
                      <div className='form-group'>
                        <label htmlFor='recipient-name' className='control-label'>Recipient:</label>
                        <input type='text' className='form-control' id='recipient-name' />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='message-text' className='control-label'>Message:</label>
                        <textarea className='form-control' id='message-text' defaultValue={''} />
                      </div>
                    </form>
                    : ''
                }
              </div>
              <div className='modal-footer'>
                {
                  this.state.close ? <button
                    type='button'
                    className='btn btn-info waves-effect'
                    data-dismiss='modal'
                    onClick={this.onClose}
                  >{this.state.textClose}</button> : ''
                }
                {
                  this.state.success ? <button
                    type='button'
                    className='btn btn-success waves-effect'
                    data-dismiss='modal'
                    onClick={this.onSuccess}
                  >{this.state.textSuccess}</button> : ''
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
