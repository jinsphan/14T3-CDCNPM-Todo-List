import React, { Component } from 'react'
import {connect} from "react-redux";
import PropTypes from 'prop-types'
import ReactGA from 'react-ga'
// components
import Header from '../../routes/Guest/components/HeaderGuest/HeaderGuest'
import Footer from '../../routes/Guest/components/Footer/FooterGuest'
import Toasts from '../../components/Toast/Toasts'
// actions
import {getSettings} from "../../store/site";
// styles
import './PageLayout.scss'

// ReactGA.initialize('UA-117528068-3')
// ReactGA.pageview(window.location.pathname + window.location.search)
class AppLayout extends Component {
  componentWillMount(){
    this.props.getSettings()
  }
  render () {
    const { children, settings } = this.props;
    return (
      <div className="guest">
        <div>
          <Header settings = {settings}/>
          {children }
          <Footer settings = {settings}/>
        </div>
        <Toasts/>
      </div>
    )
  }
}

const mapDispatchToProps = {
  getSettings
};

const mapStateToProps = (state) => {
  return ({
    settings : state.site.settings
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout)

AppLayout.propTypes = {
  children: PropTypes.node,
}
