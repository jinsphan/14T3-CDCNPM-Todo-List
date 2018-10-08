import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, browserHistory } from 'react-router'
// Components
import PageTitle from '../../../../components/Elements/PageTitle'
// Models
// Fixtures
import dashboard from './Dashboard'
// Styles
import './DashboardView.scss'

export class DashboardView extends Component {
  constructor(props){
    super(props);
    this.state = {
      bookings: 0,
      cars: 0,
      news: 0,
      notification: 0
    }
  }
  componentDidMount(){
  }
  render () {
    const { bookings } = this.state
    return (
      <div className='container-fluid'>
        <PageTitle
          title='Bảng điều khiển'
          button={[]}
        />
        <div className='row'>
          {
            dashboard.map( item => (
              <div key={item.name} className='col-lg-3 col-sm-6 col-xs-12'>
                <div className='card' style={{ cursor: 'pointer'}} onClick={() => {browserHistory.push(`/app/${item.key === 'notification' ? 'bookings' : item.key}`)}}>
                  <div className='card-body'>
                    <h5 className='card-title text-uppercase'>{item.name}</h5>
                    <div className='d-flex align-items-center no-block m-t-20 m-b-10'>
                      <h1><i className={item.icon} /></h1>
                      <div className='ml-auto'>
                        <h1 className='text-muted'>{this.state[item.key]}</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}
DashboardView.propTypes = {
}
export default DashboardView
