import React, { Component } from 'react'

import { browserHistory, Link } from 'react-router'
import PropTypes from 'prop-types'
import PerfectScrollbar from 'react-perfect-scrollbar'
import menus from './SideBar.json'
// styles
import './ScrollSideBar.scss'

import avatar from '../../styles/images/users/1.jpg'
class Sidebar extends Component {
  constructor () {
    super()
    this.state = {
      isInboxFeature: false,
      isSubLink: {
        status : true,
        key : ''
      },
    }
  }
  toggleSidebar = (route) => {
    browserHistory.push(route)
    const win = window
    if(win.innerWidth <= 768)
    document.body.classList.toggle('mini-sidebar')
  }
  render () {
    return (
      <aside className='left-sidebar'>
        <div className='scroll-sidebar ps ps--theme_default ps--active-y'>
          <PerfectScrollbar>
            <nav className='sidebar-nav active'>
              <ul id='sidebarnav'>
                
                {
                  menus.map( item => {
                    if(item.hasArrow){
                      return(
                        <li key={item.name}>
                          <a href="javascript:void(0)" onClick={() => { this.setState({isSubLink: {status : (this.state.isSubLink.key !== item.name ) ? true  : !this.state.isSubLink.status , key : item.name}})}} className={`${this.state.isSubLink.status && this.state.isSubLink.key === item.name && 'active'} has-arrow waves-effect waves-dark`}>
                            <i className={item.icon} />
                            <span className='hide-menu'>{item.name}</span>
                          </a>
                          <ul aria-expanded="false" className={`${this.state.isSubLink.status && this.state.isSubLink.key === item.name ? 'in' : ''} collapse`}>
                            {
                              item.subLink.map((subItem, index) => (
                                <li key={index}><Link to={`${item.link}/${subItem.key}`}>{subItem.name}</Link></li>
                              ))
                            }
                          </ul>
                        </li>
                      )
                    } else {
                      return(
                        <li key={item.name} onClick={() => this.toggleSidebar(item.link)}>
                          <Link to={item.link} activeClassName='active' className={`waves-effect waves-dark`}>
                            <i className={item.icon} />
                            <span className='hide-menu'>{item.name}</span>
                          </Link>
                        </li>
                      )
                    }
                  }
                  )
                }
              </ul>
            </nav>
          </PerfectScrollbar>
        </div>
      </aside>
    )
  }
}
export default Sidebar
