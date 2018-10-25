import React, { Component } from 'react'
import './Post.scss'
import PropTypes from 'prop-types'
import renderHTML from 'react-render-html'
export default class Post extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    const { content } = this.props

    return (
      <div className='post'>
        {renderHTML(content)}
      </div>
    )
  }
}
Post.propTypes = {
  content: PropTypes.string.isRequired,
}
