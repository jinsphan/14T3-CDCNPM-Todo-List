import React, { Component } from 'react'
import './Modal.scss'
export default class ModalImage extends Component {
  constructor () {
    super()
    this.state = {
      isOpen : null,
      onRequestClose : () => {},
      content:'',
      close: null,
      onRequestSuccess : () => {},
      style: ''
    }
  }
  componentWillReceiveProps (nextProps) {
    this.setState({
      isOpen: nextProps.isOpen,
      title: nextProps.title,
      content:nextProps.content,
      close: nextProps.close,
      style: nextProps.style ? nextProps.style : '',
    })
  }
  onClose = () => {
    this.setState({
      isOpen: false,
    })
  }

  render () {
    return (
      <div >

        <div className='modal' style={{ display : this.state.isOpen ? 'block' : 'none' }}>
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
                <h4 className='modal-title' id='myModalLabel'>{this.props.title}</h4>
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
                <img src={this.props.image} className="img-responsive" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
