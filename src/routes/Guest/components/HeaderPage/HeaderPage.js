import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './HeaderPage.scss'
class HeaderPage extends Component {
  constructor (props) {
    super(props)

  }
  static propTypes = {
    // userInfo: PropTypes.object.isRequired,
    // updateInfo: PropTypes.func.isRequired
  }

  render () {
    const {title} = this.props
    return (
        <div className="header-page__guest m-b-40">
          <div className="container">
            <h2 className="text-uppercase"><strong>{title}</strong></h2>
          </div>
        </div>
    )
  }
}
export default HeaderPage
