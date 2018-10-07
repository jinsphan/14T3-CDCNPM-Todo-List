import React from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import { config } from '../services/api/index'
config.set('baseUrl', 'https://thuexettb.com/api')
config.set('lang', 'vi')

class App extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
  }
  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <Provider store={this.props.store}>
        <Router history={browserHistory} children={this.props.routes} />
      </Provider>
    )
  }
}

export default App
